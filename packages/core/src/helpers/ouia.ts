import { computed, getCurrentInstance, toValue, type MaybeRef, reactive } from "vue";

type OuiaId = number | string;

// https://ouia.readthedocs.io/en/latest/README.html#ouia-component
export interface OUIAProps {
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: OuiaId;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
}

let uid = 0;
const ouiaPrefix = 'OUIA-Generated-';
const ouiaIdByRoute: Record<string, number> = {};

/**
 * Hooks version of the getOUIAProps function that also memoizes the generated ID
 * Can only be used in functional components
 */
export const useOUIAProps = ({
  name = undefined,
  id = undefined,
  variant = undefined,
  safe = false,
}: {
  name?: string;
  id?: MaybeRef<OuiaId>;
  variant?: string;
  safe?: MaybeRef<boolean>;
} = {}) => {
  if (name === undefined) {
    const instance = getCurrentInstance();
    name = (instance?.proxy?.$options.name || instance?.type.__name)?.replace(/^pf-|^Pf/, '');
  }

  return reactive({
    'data-ouia-component-type': `PF/${name}`,
    'data-ouia-safe': safe,
    'data-ouia-component-id': useOUIAId(name, id, variant),
  });
};

/**
 * Returns the ID or the memoized generated ID
 */
export const useOUIAId = (componentType?: string, id?: MaybeRef<OuiaId>, variant?: MaybeRef<string>) => {
  return computed(() => toValue(id) ?? getDefaultOUIAId(componentType, variant));
};

/**
 * Returns a generated id based on the URL location
 *
 * @param {string|undefined} componentType OUIA component type
 * @param {string} variant Optional variant to add to the generated ID
 */
export function getDefaultOUIAId(componentType?: string, variant?: MaybeRef<string>) {
  if (componentType === undefined) {
    const instance = getCurrentInstance();
    componentType = (instance?.proxy?.$options.name || instance?.type.__name)?.replace(/^pf-|^Pf/, '');
  }

  variant = toValue(variant);

  /*
  ouiaIdByRoute = {
    [route+componentType]: [number]
  }
  */
  try {
    let key;
    if (typeof window !== 'undefined') {
      // browser environments
      key = `${window.location.href}-${componentType}-${variant || ''}`;
    } else {
      // node/SSR environments
      key = `${componentType}-${variant || ''}`;
    }
    if (!ouiaIdByRoute[key]) {
      ouiaIdByRoute[key] = 0;
    }
    return `${ouiaPrefix}${componentType}-${variant ? `${variant}-` : ''}${++ouiaIdByRoute[key]}`;
  } catch (exception) {
    return `${ouiaPrefix}${componentType}-${variant ? `${variant}-` : ''}${++uid}`;
  }
}
