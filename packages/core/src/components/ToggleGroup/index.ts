import PfToggleGroup from './ToggleGroup.vue';
import PfToggleGroupItem from './ToggleGroupItem.vue';

export { PfToggleGroup, PfToggleGroupItem };

export function useSingleToggleGroup<T>() {
  return [PfToggleGroup<T | undefined | null>, PfToggleGroupItem<T>];
}

export function useMultiToggleGroup<T>() {
  return [PfToggleGroup<T[]>, PfToggleGroupItem<T>];
}
