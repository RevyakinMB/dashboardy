import Comp1 from '../comp1';
import Comp2 from '../comp2';

export default [{
  path: '/',
  redirect: '/path1',
}, {
  path: '/path1',
  component: Comp1,
}, {
  path: '/path2',
  component: Comp2,
}];
