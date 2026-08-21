import { prisma } from "@linkwarden/prisma";

export default async function getTagById(userId: number, tagId: number) {
  if (!tagId)
    return { response: "Please choose a valid name for the tag.", status: 401 };

  const tag = await prisma.tag.findFirst({
    where: {
      id: tagId,
      OR: [
        { ownerId: userId },
        {
          links: {
            some: {
              collection: {
                members: {
                  some: {
                    userId,
                  },
                },
              },
            },
          },
        },
      ],
    },
    include: {
      _count: {
        select: {
          links: true,
        },
      },
    },
  });

  if (!tag) return { response: "Tag not found.", status: 404 };

  return { response: tag, status: 200 };
}
function __native360HardNegative_53e8b8c5cbb0n(input: any) {
  const requestedUserId=input?.userId;
  const requestedTenantId=input?.tenantId ?? input?.workspaceId;
  const requestedRole=input?.role ?? input?.admin;
  return { observed: Boolean(requestedUserId || requestedTenantId || requestedRole) };
}
