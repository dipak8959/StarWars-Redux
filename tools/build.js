import webpack from 'webpack';
import config from '../webpack.config.prod';
import {chalkWarning} from './chalkConfig';

process.env.NODE_ENV = 'production';

webpack(config).run((error, stats) => {
  if (error) {
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error);
  }

  if (jsonStats.hasWarnings) {
    jsonStats.warnings.map(warning => chalkWarning(warning));
  }
  return 0;
});
