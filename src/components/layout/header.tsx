import React, { Fragment, MouseEvent, useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import { fade, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Badge from '@material-ui/core/Badge'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

import { Button, InputBase, Link } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Settings from '@material-ui/icons/Settings'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreIcon from '@material-ui/icons/More'
import LanguageIcon from '@material-ui/icons/Language'
import ContactsIcon from '@material-ui/icons/Contacts'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import Event from '@material-ui/icons/Event'
import LocalShipping from '@material-ui/icons/LocalShipping'
import AccountBalance from '@material-ui/icons/AccountBalance'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { language, setLanguage } from '../../features/languageSlice'
import { Contact } from '../../types'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.primary.main,
  },
  menu: {
    zIndex: theme.zIndex.appBar + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  languageIcon: {
    margin: '0.5em',
  },
  languageName: {
    margin: '0.5em',
  },
  contactsTitle: {
    margin: '0.5em',
  },
  contactsName: {
    margin: '0.5em',
    textDecoration: 'none',
  },
  contactsOnlineIcon: {
    marginLeft: 'auto',
    color: 'green',
  },
  contactsLastOnline: {
    marginLeft: '3em',
    fontSize: '0.75rem',
    fontStyle: 'italic',
  },
  markAsReadLink: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}))

type Props = {
  handleDrawerToggle: () => void
}

export default function Header({ handleDrawerToggle }: Props) {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const selectedLanguage = useAppSelector(language)
  const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(
    null
  )
  const [contactsAnchorEl, setContactsAnchorEl] = useState<null | HTMLElement>(
    null
  )
  const [notificationsAnchorEl, setNotificationsAnchorEl] =
    useState<null | HTMLElement>(null)
  const [profileAnchorEl, setProfileAnchorEl] = useState<null | HTMLElement>(
    null
  )
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null)
  const [contacts, setContacts] = useState<Contact[]>([])

  const isLanguageMenuOpen = Boolean(languageAnchorEl)
  const isContactsMenuOpen = Boolean(contactsAnchorEl)
  const isNotificationsMenuOpen = Boolean(notificationsAnchorEl)
  const isProfileMenuOpen = Boolean(profileAnchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleLanguageMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setLanguageAnchorEl(event.currentTarget)
  }

  const handleContactsMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setContactsAnchorEl(event.currentTarget)
  }

  const handleNotificationsMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setNotificationsAnchorEl(event.currentTarget)
  }

  const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setProfileAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleLanguageMenuClose = () => {
    setLanguageAnchorEl(null)
    // handleMobileMenuClose()
  }

  const handleLanguageSelect = (language: string) => {
    dispatch(setLanguage(language))
    handleLanguageMenuClose()
  }

  const handleContactsMenuClose = () => {
    setContactsAnchorEl(null)
    // handleMobileMenuClose()
  }

  const handleNotificationsMenuClose = () => {
    setNotificationsAnchorEl(null)
    // handleMobileMenuClose()
  }

  const handleProfileMenuClose = () => {
    setProfileAnchorEl(null)
    // handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  useEffect(() => {
    async function getAllContacts() {
      try {
        const response = await axios.get(`/api/contacts`)
        setContacts(response.data.contacts)
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.log(`Unable to get contacts: ${error.message}`)
        }
      }
    }

    getAllContacts()
  }, [])

  const languageMenuId = 'primary-language-menu'
  const renderLanguageMenu = (
    <Menu
      anchorEl={languageAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={languageMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      className={classes.menu}
      open={isLanguageMenuOpen}
      onClose={handleLanguageMenuClose}
    >
      <MenuItem
        onClick={() => handleLanguageSelect('English')}
        selected={selectedLanguage === 'English'}
      >
        <Image
          className={classes.languageIcon}
          src='/img/countries/english.svg'
          alt='United Kingdom flag'
          height={20}
          width={20}
        />
        <Typography className={classes.languageName}>English</Typography>
      </MenuItem>
      <MenuItem
        onClick={() => handleLanguageSelect('German')}
        selected={selectedLanguage === 'German'}
      >
        <Image
          className={classes.languageIcon}
          src='/img/countries/german.svg'
          alt='German flag'
          height={20}
          width={20}
        />
        <Typography className={classes.languageName}>German</Typography>
      </MenuItem>
      <MenuItem
        onClick={() => handleLanguageSelect('Spanish')}
        selected={selectedLanguage === 'Spanish'}
      >
        <Image
          className={classes.languageIcon}
          src='/img/countries/spanish.svg'
          alt='Spanish flag'
          height={20}
          width={20}
        />
        <Typography className={classes.languageName}>Spanish</Typography>
      </MenuItem>
    </Menu>
  )

  const contactsMenuId = 'primary-search-contacts-menu'
  const renderContactsMenu = (
    <Menu
      anchorEl={contactsAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={contactsMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      className={classes.menu}
      open={isContactsMenuOpen}
      onClose={handleContactsMenuClose}
    >
      <Typography className={classes.contactsTitle}>Contacts</Typography>
      {contacts.map((contact: Contact) => (
        <MenuItem key={contact.name} onClick={handleContactsMenuClose}>
          <AccountCircle />
          <Typography className={classes.contactsName}>
            {contact.name}
          </Typography>
          {contact.online && (
            <FiberManualRecordIcon className={classes.contactsOnlineIcon} />
          )}
          {!contact.online && (
            <Typography className={classes.contactsLastOnline}>
              Last online 3 hours ago
            </Typography>
          )}
        </MenuItem>
      ))}
    </Menu>
  )

  const notifications = [
    {
      id: 0,
      icon: <LocalShipping />,
      primary: 'Your item has shipped',
      secondary: 'Arriving tomorrow',
    },
    {
      id: 1,
      icon: <Event />,
      primary: 'Appointment reminder',
      secondary: '1 day away',
    },
    {
      id: 2,
      icon: <AccountBalance />,
      primary: 'Deposit received',
      secondary: 'View balance',
    },
  ]

  const notificationsMenuId = 'primary-notifications-menu'
  const renderNotificationsMenu = (
    <Menu
      anchorEl={notificationsAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={notificationsMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      className={classes.menu}
      open={isNotificationsMenuOpen}
      onClose={handleNotificationsMenuClose}
    >
      <Typography className={classes.contactsTitle}>Notifications</Typography>
      <List>
        {notifications.map((notification) => (
          <Fragment key={notification.id}>
            <ListItem onClick={handleNotificationsMenuClose}>
              <ListItemIcon>{notification.icon}</ListItemIcon>
              <ListItemText
                primary={notification.primary}
                secondary={notification.secondary}
              />
            </ListItem>
            <Divider />
          </Fragment>
        ))}
        <ListItem className={classes.markAsReadLink}>
          <div>
            <Link color='secondary' href='#'>
              Mark all as read
            </Link>
          </div>
        </ListItem>
      </List>
    </Menu>
  )

  const profileMenuId = 'primary-account-menu'
  const renderProfileMenu = (
    <Menu
      anchorEl={profileAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={profileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      className={classes.menu}
      open={isProfileMenuOpen}
      onClose={handleProfileMenuClose}
    >
      <Link href='/account'>
        <MenuItem>
          <AccountCircle />
          <Typography className={classes.contactsName}>Profile</Typography>
        </MenuItem>
      </Link>
      <Link href='#'>
        <MenuItem>
          <Settings />
          <Typography className={classes.contactsName}>Settings</Typography>
        </MenuItem>
      </Link>
      <MenuItem>
        <Button href='/' fullWidth variant='contained' color='secondary'>
          Logout
        </Button>
      </MenuItem>
    </Menu>
  )

  const mobileMenuId = 'primary-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      className={classes.menu}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleLanguageMenuOpen}>
        <IconButton
          aria-label='language options'
          aria-controls='primary-language-menu'
          aria-haspopup='true'
          color='inherit'
        >
          <LanguageIcon />
        </IconButton>
        <p>Language</p>
      </MenuItem>
      <MenuItem onClick={handleContactsMenuOpen}>
        <IconButton
          aria-label='contact list'
          aria-controls='primary-contacts-menu'
          aria-haspopup='true'
          color='inherit'
        >
          <ContactsIcon />
        </IconButton>
        <p>Contacts</p>
      </MenuItem>

      <MenuItem onClick={handleNotificationsMenuOpen}>
        <IconButton
          aria-label='notifications list'
          aria-controls='primary-notifications-menu'
          aria-haspopup='true'
          color='inherit'
        >
          <NotificationsIcon />
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label='account of current user'
          aria-controls='primary-account-menu'
          aria-haspopup='true'
          color='inherit'
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )

  return (
    <Fragment>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant='h6' noWrap>
            Dashboard
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              edge='end'
              aria-label='language settings'
              aria-controls={languageMenuId}
              aria-haspopup='true'
              onClick={handleLanguageMenuOpen}
              color='inherit'
            >
              <LanguageIcon />
            </IconButton>
            <IconButton
              edge='end'
              aria-label='language settings'
              aria-controls={contactsMenuId}
              aria-haspopup='true'
              onClick={handleContactsMenuOpen}
              color='inherit'
            >
              <ContactsIcon />
            </IconButton>
            <IconButton
              aria-label='show notifications'
              aria-controls={notificationsMenuId}
              aria-haspopup='true'
              onClick={handleNotificationsMenuOpen}
              color='inherit'
            >
              <Badge badgeContent={17} color='secondary'>
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge='end'
              aria-label='account of current user'
              aria-controls={profileMenuId}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderLanguageMenu}
      {renderContactsMenu}
      {renderNotificationsMenu}
      {renderProfileMenu}
    </Fragment>
  )
}
