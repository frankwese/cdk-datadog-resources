import { CfnResource, Construct } from '@aws-cdk/core';
import * as camelcaseKeys from 'camelcase-keys';
import { DatadogCredentials } from '../common/properties';

export interface DatadogIntegrationProps {
  /** Credentials for the Datadog API */
  readonly datadogCredentials: DatadogCredentials;

  /** Role name */
  readonly accountId: string;

  /** Role name */
  readonly roleName: string;

}

/**
 * Datadog Integration 1.0.0
 */
export class DatadogIntegration {
  constructor(scope: Construct, id: string, props: DatadogIntegrationProps) {
    const cfnProperties = camelcaseKeys(props, {
      deep: true,
      pascalCase: true,
    });
    new CfnResource(scope, id, {
      type: 'Datadog::Integrations::AWS',
      properties: { ...cfnProperties },
    });
  }
}