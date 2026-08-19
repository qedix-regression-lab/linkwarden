// Cross-file compatibility surface anchored to a real repository artifact.
export async function handle(loader,input){
  return loader("apps/web/lib/api/controllers/tags/tagId/deleteTagById.ts",input);
}
