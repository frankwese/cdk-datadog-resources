import { CfnResource, Construct } from '@aws-cdk/core';
import * as camelcaseKeys from 'camelcase-keys';
import { DatadogCredentials } from '../common/properties';

export interface DatadogIntegrationProps {
  /** Credentials for the Datadog API */
  readonly datadogCredentials: DatadogCredentials;

  /** The id of the account with which to integrate. */
  readonly accountId: string;

  /**
   * The name of the created role.
   *
   * @default DatadogIntegrationRole
   * */
  roleName?: string;

}

/**
 * Datadog Integration 1.0.0
 */
export class DatadogIntegration {
  constructor(scope: Construct, id: string, props: DatadogIntegrationProps) {
    props.roleName ||= 'DatadogIntegrationRole';

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