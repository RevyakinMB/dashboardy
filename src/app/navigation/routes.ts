import DistributionCenters from '../distibution-centers';
import Comp2 from '../comp2';

export default [{
  path: '/',
  redirect: '/path1',
}, {
  path: '/path1',
  component: DistributionCenters,
}, {
  path: '/path2',
  component: Comp2,
}];
