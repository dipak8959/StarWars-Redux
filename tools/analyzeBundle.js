import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import config from '../webpack.config.prod';
import {chalkWarning} from './chalkConfig';

config.plugins.push(new BundleAnalyzerPlugin());

const compiler = webpack(config);
//
compiler.run((error, stats) => {
  if (error) {
    throw new Error(error);
  }
  else{
    chalkWarning(stats);
    //We are good.
  }
});
