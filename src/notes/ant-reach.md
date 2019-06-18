---
path: '/notes/ant-reach'
date: '2019-06-18'
title: 'Navigating with Ant Design and Reach Router'
draft: false
---

[Ant Design](https://ant.design/docs/react/introduce) is an open-source design system built with React. It provides a collection of well-designed, functional, and accessible components to kickstart your React project.

The `Menu` component is excellent for site-wide navigation, but it wasn't immediately clear how to make this work with [Reach Router](https://reach.tech/router).

After some experimentation, I was able to get these working together:

```javascript
<Location>
  {props => {
    return (
      <Menu selectedKeys={[props.location.pathname]}>
        <Menu.Item key="/courses">
          <Link to="/courses">Courses</Link>
        </Menu.Item>
        <Menu.Item key="/users">
          <Link to="/users">Users</Link>
        </Menu.Item>
        <Menu.Item key="/profile">
          <Link to="/profile">My Profile</Link>
        </Menu.Item>
      </Menu>
    );
  }}
</Location>
```

With Reach Router, any component that's a direct child of the router receives a `location` prop that describes the user's current location within the app.

In my case, the header navigation is a child of a page layout component. Rather than passing `location` through as a prop, I've used the `Location` component. This provides a child render prop that has access to the user's location.

Ant's `Menu` component takes any number of `Menu.Item` children. Each of these has a `key` to uniquely identify it, while the parent menu has `selectedKeys` prop which takes an array of items that should be selected.

By setting the key of each menu item to the corresponding path name, these can easily be matched up by passing the `selectedKeys` prop a single-element array containing `props.location.pathname`.

In short, Reach Router says "we're on /courses" and Ant's menu says "okay, I'll select the menu item with a key of /courses".

This would get more complex for paths with variables (e.g. /courses/abc123/edit) but for basic navigation, this does the trick.
