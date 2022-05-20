import { client, checkError } from './client.js';

export async function getEntries() {
  const resp = await client.from('feelings_list').select('*');
  console.log('resp', resp);
  return checkError(resp);
}

// export async function createTodos(object) {
//   const resp = await client.from('mood').insert();
//   return checkError(resp);
// }
// export async function updateCompleted(id, complete) {
//   const resp = await client
//     .from('todos_react')
//     .update({ complete })
//     .eq('id', id)
//     .single();
//   return checkError(resp);
// }
