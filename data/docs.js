module.exports = {
    pos: {
    name: 'POS 业务',
    children: [
      {
        name: 'POS相关',
        items: [
          {
            id: 'pos-guide',
            title: 'POS 使用须知',
            file: 'pos/pos-guide.md'
          }
        ]
      }
    ]
  },
  terminal: {
    name: 'Merchant Services 业务',
    children: [
      {
        name: '刷卡机型号',
        items: [
          {
            id: 'pax-a80',
            title: 'PAX A80 设置',
            file: 'terminal/pax-a80.md'
          },
          {
            id: 'pax-a35',
            title: 'PAX A35 设置',
            file: 'terminal/pax-a35.md'
          },
          {
            id: 'pax-s300',
            title: 'PAX S300 设置',
            file: 'terminal/pax-s300.md'
          },
          {
            id: 'pax-a920',
            title: 'PAX A920 设置',
            file: 'terminal/pax-a920.md'
          },
        ]
      }
    ]
  },
  
  printer: {
    name: '硬件中心',
    children: [
      {
        name: '打印机驱动',
        items: [
          {
            id: 'printer-drivers',
            title: 'Printer Drivers Download',
            file: 'printer/drivers.md'
          }
        ]
      }
    ]
  },

    software: {
    name: '下载中心',
    children: [
      {
        name: '软件下载',
        items: [
          {
            id: 'software-download-1',
            title: '新人培训工具下载',
            file: 'software/download-1.md'
          },
          {
            id: 'software-download-2',
            title: '餐厅软件下载',
            file: 'software/download-2.md'
          }
        ]
      }
    ]
  },
  
  shoppinglist: {
    name: '购买建议',
    children: [
      {
        name: '产品推荐',
        items: [
          {
            id: '购买链接',
            title: 'shopping list',
            file: 'shoppinglist/shoppinglist.md'
          }
        ]
      }
    ]
  }

};
