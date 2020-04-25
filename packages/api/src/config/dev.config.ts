import * as dotenv from 'dotenv';
import type { Config } from './index';

import { Organization } from '@/api/organization/organization.entity';
import { Project } from '@/api/project/project.entity';
import { User } from '@/api/user/user.entity';
import { Event } from '@/api/event/event.entity';
import { Performance } from '@/api/performance/performance.entity';
import { Issue } from '@/api/issue/issue.entity';
import { Replay } from '@/api/replay/replay.entity';
import { Feedback } from '@/api/feedback/feedback.entity';
import { View } from '@/api/view/view.entity';
import { SourceMap } from '@/api/sourceMap/sourceMap.entity';

dotenv.config();

const entities = [
  Organization,
  Project,
  User,
  Event,
  Performance,
  Issue,
  Replay,
  Feedback,
  View,
  SourceMap,
];

export const config: Config = {
  orm: {
    type: 'postgres',
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT, 10),
    database: process.env.TYPEORM_DATABASE,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    synchronize: true,
    cache: {
      duration: 300000, // 30 seconds
    },
    entities,
    logging: true,
  },
  oauth: {
    github: {
      client_id: process.env.OAUTH_GITHUB_CLIENT_ID_DEV,
      client_secret: process.env.OAUTH_GITHUB_CLIENT_SECRET_DEV,
      callback_url: process.env.OAUTH_GITHUB_CALLBACK_URL_DEV,
    },
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    signOptions: {
      expiresIn: process.env.JWT_EXPIRES_IN,
    },
  },
};
