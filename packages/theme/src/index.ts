import type { Router, RouteRecordRaw } from 'vue-router'
import { useBreakpoints, useNavbar, type MenuNode, type Route, type MenuSchema } from '@aeria-ui/core'
import { useStore, getGlobalStateManager, type GlobalStateManager } from '@aeria-ui/state-management'
import { reactive, inject, toRefs, onMounted } from 'vue'

type NavbarRefs = {
  routes: Route[]
  router: Pick<Router, 'push'>
  isCurrent: Awaited<ReturnType<typeof useNavbar>>['isCurrent']
}

let manager: GlobalStateManager | undefined = undefined

export const breakpoints = useBreakpoints()

export const badgeMemo: Record<string, unknown> = {}

export const navbarRefs = reactive<NavbarRefs>({
  routes: [],
  router: {} as any,
  isCurrent: (..._args: unknown[]) => false,
})

export const {
  routes,
  isCurrent,
} = toRefs(navbarRefs)

export const memoizeBadge = (promise: ()=> Promise<unknown> | unknown, key: string) => {
  if( key in badgeMemo ) {
    return badgeMemo[key]
  }

  const result = badgeMemo[key] = promise()
  return result
}

export const pushRoute = (...args: Parameters<Router['push']>) => {
  if( !breakpoints.value.md ) {
    const metaStore = useStore('meta', manager)
    metaStore.menu.visible = false
  }

  window.scrollTo(0, 0)
  return navbarRefs.router.push(...args)
}

export const navbarEntryOpen = (node: MenuNode): boolean | undefined => {
  if( 'children' in node ) {
    return node.children!.some((child) => {
      if( typeof child === 'string' ) {
        return
      }

      if( 'path' in child ) {
        return isCurrent.value(child as RouteRecordRaw)
      }

      if( 'children' in child ) {
        return navbarEntryOpen(child)
      }
    })
  }
}

export const isCollapsibleRouteOpen = (node: MenuNode) => {
  if( !('collapsed' in node) ) {
    return 'children' in node
  }

  if( node.collapsed !== 'user' && navbarEntryOpen(node) ) {
    node.collapsed = false
    return true
  }

  return !node.collapsed
}

export const routeClick = (node: MenuNode) => {
  if( 'collapsed' in node ) {
    node.collapsed = node.collapsed
      ? false
      : 'user'
    return
  }

  return pushRoute({
    path: node.path!,
  })
}

export const initTheme = () => {
  const menuSchema = inject<MenuSchema>('menuSchema', [])
  manager = getGlobalStateManager()

  onMounted(async () => {
    const navbar = await useNavbar({
      schema: menuSchema,
    })

    Object.assign(navbarRefs, navbar)
  })
}

