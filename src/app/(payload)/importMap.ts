import { Logo } from '@/components/payload/Logo';
import { Icon } from '@/components/payload/Logo';
import { CustomDashboard } from '@/components/payload/CustomDashboard';
import { RscEntryLexicalCell } from '@payloadcms/richtext-lexical/rsc';
import { RscEntryLexicalField } from '@payloadcms/richtext-lexical/rsc';
import { LexicalDiffComponent } from '@payloadcms/richtext-lexical/rsc';

export const importMap = {
  '@/components/payload/Logo#Logo': Logo,
  '@/components/payload/Logo#Icon': Icon,
  '@/components/payload/CustomDashboard#CustomDashboard': CustomDashboard,
  '@payloadcms/richtext-lexical/rsc#RscEntryLexicalCell': RscEntryLexicalCell,
  '@payloadcms/richtext-lexical/rsc#RscEntryLexicalField': RscEntryLexicalField,
  '@payloadcms/richtext-lexical/rsc#LexicalDiffComponent': LexicalDiffComponent,
};
