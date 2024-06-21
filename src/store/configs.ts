import { useQuery } from '@tanstack/react-query';

import { fetchConfigs2 } from '$src/api/configs';
import { fetchVersion } from '$src/api/version';
import { ENDPOINT } from '$src/misc/constants';
import { useApiConfig } from '$src/store/app';

export function useClashConfig() {
  const apiConfig = useApiConfig();
  const config = useQuery([ENDPOINT.config, apiConfig], fetchConfigs2);
  const { data: version } = useQuery(['/version', apiConfig], fetchVersion);
  config.data.singBox = version.premium && version.meta;
  return config;
}
