const Mock = require('mockjs');
const express = require('express');

const router = express.Router();

router.use('/menu', (req, res) => {
  console.log(req.body);
  // 调用mock方法模拟数据
  const data = Mock.mock({
    code: 200,
    data: {
      list: [
        {
          id: 5,
          name: '首页',
          url: '/dashboard',
          icon: 'DashboardOutlined',
          desc: '首页',
          sort: 1,
          parentId: 0,
          level: 1,
          children: [
            {
              id: 6,
              name: '系统介绍',
              url: '/dashborad/intro',
              icon: 'ReadOutlined',
              desc: '系统介绍',
              sort: 1,
              parentId: 5,
              level: 2,
            },
          ],
        },
        {
          id: 1,
          name: '权限管理',
          url: '/auth',
          icon: 'MenuUnfoldOutlined',
          desc: '权限管理',
          sort: 10,
          parentId: 0,
          level: 1,
          children: [
            {
              id: 3,
              name: '用户管理',
              url: '/auth/user',
              icon: 'UserOutlined',
              desc: '用户管理',
              sort: 2,
              parentId: 1,
              level: 2,
            },
            {
              id: 4,
              name: '角色管理',
              url: '/auth/role',
              icon: 'TeamOutlined',
              desc: '角色管理',
              sort: 3,
              parentId: 1,
              level: 2,
            },
          ],
        },
      ],
      ids: [1, 2, 4, 3, 5, 6],
    },
    msg: 'success',
  });
  return res.json(data);
});

router.use('/login', (req, res) => {
  console.log(req.body);
  // 调用mock方法模拟数据
  const data = Mock.mock({
    code: 200,
    data: {
      token: 'a33cf7dd481a28429379c0af9893e44c',
      id: 35,
      account: 'herbert',
      avatar: null,
      mobile: '15001859792',
      roleId: 1,
      status: 1,
    },
    msg: 'success',
  });
  return res.json(data);
});

module.exports = router;
