import { SynthUtils } from '@aws-cdk/assert';
import { Stack } from '@aws-cdk/core';
import { DatadogIntegration } from '../../src/integrations/datadog-integration';

test('Snapshot test', () => {
  const stack = new Stack();

  new DatadogIntegration(stack, 'TestIntegration', {
    datadogCredentials: {
      apiKey: 'DATADOG_API_KEY',
      applicationKey: 'DATADOG_APP_KEY',
    },
    accountId: '123456',
    roleName: 'DatadogAWSAcctRoleName',
  });

  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});
