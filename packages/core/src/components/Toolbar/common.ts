import globalBreakpointMd from '@patternfly/react-tokens/dist/js/t_global_breakpoint_md';
import globalBreakpointLg from '@patternfly/react-tokens/dist/js/t_global_breakpoint_lg';
import globalBreakpointXl from '@patternfly/react-tokens/dist/js/t_global_breakpoint_xl';
import globalBreakpoint2xl from '@patternfly/react-tokens/dist/js/t_global_breakpoint_2xl';

export const globalBreakpoints = {
  md: parseInt(globalBreakpointMd.value),
  lg: parseInt(globalBreakpointLg.value),
  xl: parseInt(globalBreakpointXl.value),
  '2xl': parseInt(globalBreakpoint2xl.value),
};
