import { tool as createTool } from 'ai';
import { z } from 'zod';

export const weatherTool = createTool({
  description: 'Display the weather for a location',
  inputSchema: z.object({
    location: z.string().describe('The location to get the weather for'),
  }),
  execute: async function ({ location }) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return { weather: 'Sunny', temperature: 75, location };
  },
});

export const JiraTool = createTool({
  description: 'Share the Link with the Log to our internal Jira Form, where people can log maintenance and visitor requests',
  inputSchema: z.object({
    link: z.string('https://www.atlassian.com/software/jira?referer=jira.com'),
  }),
    execute: async function ({ link }) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return {link: 'https://www.atlassian.com/software/jira?referer=jira.com', imageLink: '/Jira_Logo.svg'};
  },
});

export const MomentusTool = createTool({
  description: 'For people that want to book a room an appointment or an event, share the Link to Momentus the event booking platform.',
  inputSchema: z.object({
    link: z.string('https://gomomentus.com/'),
  }),
    execute: async function ({ link }) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return { link: 'https://gomomentus.com/', imageLink: '/Momentus.png'};
  },
});

export const tools = {
  displayWeather: weatherTool,
  displayJira: JiraTool,
  displayMomentus: MomentusTool,
};