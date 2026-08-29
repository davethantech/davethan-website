import { buildConfig } from 'payload';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { slateEditor } from '@payloadcms/richtext-slate';
import { cloudinaryStorage } from 'payload-storage-cloudinary';
import path from 'path';
import { fileURLToPath } from 'url';

import { Users } from './collections/Users';
import { Posts } from './collections/Posts';
import { Categories } from './collections/Categories';
import { Media } from './collections/Media';
import { Jobs } from './collections/Jobs';
import { FormSubmissions } from './collections/FormSubmissions';
import { Subscribers } from './collections/Subscribers';
import { Newsletters } from './collections/Newsletters';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    suppressHydrationWarning: true,
    meta: {
      titleSuffix: '— Davethan CMS',
      icons: [{ rel: 'icon', url: '/favicon.ico' }],
    },
    components: {
      beforeDashboard: ['@/components/payload/CustomDashboard#CustomDashboard'],
      graphics: {
        Logo: '@/components/payload/Logo#Logo',
        Icon: '@/components/payload/Logo#Icon',
      },
    },
  },
  collections: [
    Users,
    Posts,
    Categories,
    Media,
    Jobs,
    FormSubmissions,
    Subscribers,
    Newsletters,
  ],
  editor: slateEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'fallback-secret',
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || '',
  }),
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  plugins: [
    // cloudinaryStorage is a self-contained plugin — it wraps cloudStoragePlugin internally.
    // API: { cloudConfig: { cloud_name, api_key, api_secret }, collections: { [slug]: true | config } }
    cloudinaryStorage({
      cloudConfig: {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME || '',
        api_key: process.env.CLOUDINARY_API_KEY || '',
        api_secret: process.env.CLOUDINARY_API_SECRET || '',
      },
      collections: {
        media: true,
      },
    }),
  ],
});
