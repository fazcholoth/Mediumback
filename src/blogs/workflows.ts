import * as workflow from '@temporalio/workflow';
import { sleep } from '@temporalio/workflow'


import type * as activities from './activities';

const { postBlog } = workflow.proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
});


export async function Blog(blog): Promise<any> {
  
  await sleep(180000)
  return await postBlog(blog);
}