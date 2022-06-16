import React, { Fragment, MouseEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Hidden from '@material-ui/core/Hidden'
import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Collapse from '@material-ui/core/Collapse'

import { Avatar, Divider, Typography } from '@material-ui/core'
import { DrawerLink } from '../../types'

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: '20em',
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundColor: theme.palette.primary.main,
    width: '20em',
    color: '#fff',
  },
  drawerContainer: {
    overflow: 'auto',
  },
  drawerItem: {
    //@ts-ignore
    ...theme.typography.tab,

    opacity: 0.8,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  drawerItemSelected: {
    opacity: 1,
    color: theme.palette.secondary.main,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  profileBoxOuter: {
    margin: '1em',
  },
  profileBoxInner: {
    display: 'flex',
  },
  profileLink: {
    margin: '0.5em',
  },
}))

const links: DrawerLink[] = [
  { label: 'Overview', path: '/', itemIndex: 0 },
  { label: 'Metrics', path: '/metrics', itemIndex: 1 },
  { label: 'Customers', path: '/customers', itemIndex: -1 },
  {
    label: 'List',
    path: '/customers',
    itemIndex: 2,
    nested: 'customers',
  },
  {
    label: 'Map',
    path: '/customers/map',
    itemIndex: 3,
    nested: 'customers',
  },
  { label: 'Orders', path: '/orders', itemIndex: 4 },
  { label: 'Photo Album', path: '/album', itemIndex: 5 },
  { label: 'Company News', path: '/news', itemIndex: 6 },
  { label: 'Account', path: '/account', itemIndex: 7 },
  { label: 'Upgrade', path: '/upgrade', itemIndex: 8 },
  { label: 'React Features', path: '/react', itemIndex: -2 },
  {
    label: 'Custom Hooks',
    path: '/react/custom-hooks',
    itemIndex: 9,
    nested: 'react',
  },
  {
    label: 'Conditional Rendering',
    path: '/react/conditional-rendering',
    itemIndex: 10,
    nested: 'react',
  },
  {
    label: 'Error Boundaries',
    path: '/react/error-boundaries',
    itemIndex: 11,
    nested: 'react',
  },
  {
    label: 'Memo',
    path: '/react/memo',
    itemIndex: 12,
    nested: 'react',
  },
  {
    label: 'Portals',
    path: '/react/portals',
    itemIndex: 13,
    nested: 'react',
  },
  {
    label: 'Profiler',
    path: '/react/profiler',
    itemIndex: 14,
    nested: 'react',
  },
  {
    label: 'Mount/Update/Unmount',
    path: '/react/mount-update-unmount',
    itemIndex: 15,
    nested: 'react',
  },
  {
    label: 'Should Component Update',
    path: '/react/should-component-update',
    itemIndex: 16,
    nested: 'react',
  },
  { label: 'NextJS Features', path: '/nextjs', itemIndex: -3 },
  {
    label: 'Static Generation',
    path: '/nextjs/static-generation',
    itemIndex: 17,
    nested: 'nextjs',
  },
  {
    label: 'Revalidation',
    path: '/nextjs/revalidation',
    itemIndex: 18,
    nested: 'nextjs',
  },
  {
    label: 'Server-side Rendering',
    path: '/nextjs/server-side-rendering',
    itemIndex: 19,
    nested: 'nextjs',
  },
  {
    label: 'Image Optimization',
    path: '/nextjs/image-optimization',
    itemIndex: 20,
    nested: 'nextjs',
  },
  {
    label: 'Shallow Routing',
    path: '/nextjs/10',
    itemIndex: 21,
    nested: 'nextjs',
  },
  { label: 'Redux', path: '/redux', itemIndex: -4 },
  {
    label: 'Setup',
    path: '/redux/setup',
    itemIndex: 22,
    nested: 'redux',
  },
  {
    label: 'Async Thunk',
    path: '/redux/async-thunk',
    itemIndex: 23,
    nested: 'redux',
  },
  {
    label: 'Entity Adapter',
    path: '/redux/entity-adapter',
    itemIndex: 24,
    nested: 'redux',
  },
  { label: 'MongoDB', path: '/mongo', itemIndex: -5 },
  {
    label: 'MongoDB with GraphQL',
    path: '/mongo/mongodb-with-graphql',
    itemIndex: 25,
    nested: 'mongo',
  },
  { label: 'Jest', path: '/jest', itemIndex: -6 },
  {
    label: 'Setup',
    path: '/jest/setup',
    itemIndex: 26,
    nested: 'jest',
  },
  { label: 'Code Examples', path: '/examples', itemIndex: -7 },
  {
    label: 'Alien Alphabet',
    path: '/examples/alien-alphabet',
    itemIndex: 27,
    nested: 'examples',
  },
  {
    label: 'Chat',
    path: '/examples/chat',
    itemIndex: 28,
    nested: 'examples',
  },
]

type Props = {
  mobileOpen: boolean
  handleDrawerToggle: () => void
}

export default function ResponsiveDrawer({
  mobileOpen,
  handleDrawerToggle,
}: Props) {
  const classes = useStyles()
  const theme = useTheme()
  const router = useRouter()
  const [selectedItemIndex, setSelectedItemIndex] = useState(0)
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const [customerOpen, setCustomerOpen] = useState(false)
  const [reactOpen, setReactOpen] = useState(false)
  const [nextJSOpen, setNextJSOpen] = useState(false)
  const [reduxOpen, setReduxOpen] = useState(false)
  const [mongoOpen, setMongoOpen] = useState(false)
  const [jestOpen, setJestOpen] = useState(false)
  const [examplesOpen, setExamplesOpen] = useState(false)

  useEffect(() => {
    const selectedLink = links.find(
      (link) => link.path === window.location.pathname
    )

    if (selectedLink) {
      setSelectedItemIndex(selectedLink.itemIndex)
    }
  }, [])

  const handleDrawerLinkClick = (
    event: MouseEvent<HTMLElement>,
    link: DrawerLink,
    mobileDrawer: string | undefined
  ) => {
    event.preventDefault()

    setSelectedItemIndex(link.itemIndex)

    // If we are already on the path, do nothing
    if (link.path === window.location.pathname) {
      return
    }

    if (mobileDrawer) {
      handleDrawerToggle()
    }

    return router.push(link.path)
  }

  const profileBox = () => {
    return (
      <Fragment>
        <Box className={classes.profileBoxOuter}>
          <Box className={classes.profileBoxInner}>
            <Link href='/account'>
              <a className={classes.profileLink}>
                <Avatar alt='profile picture'></Avatar>
              </a>
            </Link>
            <Box>
              <div>
                <Typography variant='h6' component='h2'>
                  Rolando Rodriguez
                </Typography>
                <Typography variant='body2' component='p'>
                  Current Plan: Free
                </Typography>
              </div>
            </Box>
          </Box>
        </Box>
        <Divider />
      </Fragment>
    )
  }

  const list = (mobileDrawer: string | undefined) => {
    return (
      <List disablePadding>
        {links.map((link) => {
          if (link.nested) {
            return null
          }

          if (link.label === 'Customers') {
            return nestedList(
              'customers',
              link,
              mobileDrawer,
              customerOpen,
              setCustomerOpen
            )
          }

          if (link.label === 'React Features') {
            return nestedList(
              'react',
              link,
              mobileDrawer,
              reactOpen,
              setReactOpen
            )
          }

          if (link.label === 'NextJS Features') {
            return nestedList(
              'nextjs',
              link,
              mobileDrawer,
              nextJSOpen,
              setNextJSOpen
            )
          }

          if (link.label === 'Redux') {
            return nestedList(
              'redux',
              link,
              mobileDrawer,
              reduxOpen,
              setReduxOpen
            )
          }

          if (link.label === 'MongoDB') {
            return nestedList(
              'mongo',
              link,
              mobileDrawer,
              mongoOpen,
              setMongoOpen
            )
          }

          if (link.label === 'Jest') {
            return nestedList('jest', link, mobileDrawer, jestOpen, setJestOpen)
          }

          if (link.label === 'Code Examples') {
            return nestedList(
              'examples',
              link,
              mobileDrawer,
              examplesOpen,
              setExamplesOpen
            )
          }

          return (
            <ListItem
              key={link.path}
              divider
              button
              component='a'
              selected={selectedItemIndex === link.itemIndex}
              // Applies the class only to selected menu items
              classes={{
                root: classes.drawerItem,
                selected: classes.drawerItemSelected,
              }}
              onClick={(e: MouseEvent<HTMLElement>) =>
                handleDrawerLinkClick(e, link, mobileDrawer)
              }
            >
              <ListItemText>{link.label}</ListItemText>
            </ListItem>
          )
        })}
      </List>
    )
  }

  const nestedList = (
    type: string,
    nestedLink: DrawerLink,
    mobileDrawer: string | undefined,
    open: boolean,
    setOpen: (open: boolean) => void
  ) => {
    const nestedLinks = links.filter((link) => link.nested === type)

    return (
      <Fragment key={nestedLink.itemIndex}>
        <ListItem
          divider
          button
          classes={{
            root: classes.drawerItem,
          }}
          onClick={() => setOpen(!open)}
        >
          <ListItemText>{nestedLink.label}</ListItemText>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            {nestedLinks.map((link) => (
              <ListItem
                key={link.itemIndex}
                divider
                button
                component='a'
                selected={selectedItemIndex === link.itemIndex}
                classes={{
                  root: classes.drawerItem,
                  selected: classes.drawerItemSelected,
                }}
                className={classes.nested}
                onClick={(e: MouseEvent<HTMLElement>) =>
                  handleDrawerLinkClick(e, link, mobileDrawer)
                }
              >
                <ListItemText>{link.label}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Collapse>
      </Fragment>
    )
  }

  return (
    <Fragment>
      {/*@ts-ignore*/}
      <Hidden lgUp implementation='css'>
        <SwipeableDrawer
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
          variant='temporary'
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onOpen={handleDrawerToggle}
          onClose={handleDrawerToggle}
          classes={{ paper: classes.drawerPaper }}
          className={classes.drawer}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {profileBox()}
          <div className={classes.drawerContainer}>{list('mobile')}</div>
        </SwipeableDrawer>
      </Hidden>
      {/*@ts-ignore*/}
      <Hidden mdDown implementation='css'>
        <Drawer
          variant='permanent'
          classes={{ paper: classes.drawerPaper }}
          className={classes.drawer}
        >
          <Toolbar />
          {profileBox()}
          <div className={classes.drawerContainer}>{list(undefined)}</div>
        </Drawer>
      </Hidden>
    </Fragment>
  )
}
