import { Observable, ApolloLink, execute } from 'apollo-link';
import gql from 'graphql-tag';
import * as fetchMock from 'fetch-mock';

import {
  parseAndCheckHttpResponse,
  selectHttpOptionsAndBody,
  selectURI,
  serializeFetchBody,
} from '../index';

const sampleQuery = gql`
  query SampleQuery {
    stub {
      id
    }
  }
`;

describe('Link Utilities', () => {
  describe('Http utilities', () => {
    describe('parseAndCheckResponse', () => {
      it('throws a network error with a status code and result', () => {});
      it('throws a server error on incorrect data', () => {});
      it('is able to return a correct result and add it to the context', () => {});
    });

    describe('selectOptionsAndBody', () => {
      it('throws a network error', () => {});
    });

    describe('selectURI', () => {
      it('returns a passed in string', () => {});
      it('returns a fallback of /graphql', () => {});
      it('returns the result of a UriFunction', () => {});
    });

    describe('serializeFetchBody', () => {
      it('throws a parse error on an unparsable body', () => {
        const b = {};
        const a = { b };
        (b as any).a = a;

        expect(() => serializeFetchBody(b)).toThrow();
      });

      it('returns a correctly parsed body', () => {
        const body = { no: 'thing' };

        expect(serializeFetchBody(body)).toEqual('{"no":"thing"}');
      });
    });
  });
});