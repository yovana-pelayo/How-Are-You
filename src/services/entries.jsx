import { client, checkError } from './client.js';

export async function getEntries() {
  const resp = await client.from('feelings_list').select('*');
  console.log('resp', resp);
  return checkError(resp);
}

export async function createEntry() {
  const resp = await client.from('feelings_list').insert();
  return checkError(resp);
}
export async function getMoods() {
  const resp = await client.from('mood').select();
  console.log('resp', resp);
  return checkError(resp);
}
export async function getNeeds() {
  const resp = await client.from('needs').select();
  console.log('resp', resp);
  return checkError(resp);
}
