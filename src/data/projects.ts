export interface Project {
  id: string;
  title: string;
  description: string;
  bvid: string;
  repoUrl: string;
  experienceUrl: string;
}

export const projects: Project[] = [
  {
    id: 'kotoba-hitomi',
    title: 'kotoba-hitomi',
    description:
      'Nihongo AI web : Vue3,FASTAPI',
    bvid: 'BV1W9gSzdEFa',
    repoUrl: 'https://github.com/dieWehmut/kotoba-hitomi',
    experienceUrl: 'https://diewehmut.github.io/kotoba-hitomi/',
  },
  {
    id: 'PhantomGenesis',
    title: 'PhantomGenesis',
    description:
      'Survival game:Qt(Widget),C++',
    bvid: 'BV1c6gDzsELp',
    repoUrl: 'https://github.com/dieWehmut/PhantomGenesis',
    experienceUrl: 'https://github.com/dieWehmut/Showcase/releases/tag/PhantomGenesis',
  },
];
