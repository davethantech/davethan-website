import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { fileURLToPath } from 'url';

import { Users } from './collections/Users';
import { Posts } from './collections/Posts';
import { Categories } from './collections/Categories';
import { FormSubmissions } from './collections/FormSubmissions';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Posts,
    Categories,
    FormSubmissions,
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'fallback-secret',
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URI || 'postgres://payload:payloadpassword@127.0.0.1:5432/davethan',
    },
  }),
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
});
