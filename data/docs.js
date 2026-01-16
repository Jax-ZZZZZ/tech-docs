module.exports = {
  pos: {
    name: { zh: 'POS 业务', en: 'POS' },
    children: [
      {
        name: { zh: 'POS相关', en: 'POS' },
        items: [
          {
            id: 'pos-guide',
            title: { zh: 'POS 使用须知', en: 'POS Usage Guide' },
            files: {
              zh: 'pos/pos-guide-cn.md',
              en: 'pos/pos-guide-en.md'
            }
          }
        ]
      }
    ]
  },

  terminal: {
    name: { zh: '刷卡机型号', en: 'Terminals' },
    children: [
      {
        name: { zh: 'PAX', en: 'PAX' },
        items: [
          {
            id: 'pax-a80',
            title: { zh: 'PAX A80 设置', en: 'PAX A80 Setup' },
            files: {
              zh: 'terminal/pax-a80-cn.md',
              en: 'terminal/pax-a80-en.md'
            }
          },
          {
            id: 'pax-a35',
            title: { zh: 'PAX A35 设置', en: 'PAX A35 Setup' },
            files: {
              zh: 'terminal/pax-a35-cn.md',
              en: 'terminal/pax-a35-en.md'
            }
          },
          {
            id: 'pax-s300',
            title: { zh: 'PAX S300 设置', en: 'PAX S300 Setup' },
            files: {
              zh: 'terminal/pax-s300-cn.md',
              en: 'terminal/pax-s300-en.md'
            }
          },
          {
            id: 'pax-a920',
            title: { zh: 'PAX A920 设置', en: 'PAX A920 Setup' },
            files: {
              zh: 'terminal/pax-a920-cn.md',
              en: 'terminal/pax-a920-en.md'
            }
          },
          {
            id: 'pax-s80',
            title: { zh: 'PAX S80 设置', en: 'PAX S80 Setup' },
            files: {
              zh: 'terminal/pax-s80-cn.md',
              en: 'terminal/pax-s80-en.md'
            }
          }
        ]
      }
    ]
  },

  printer: {
    name: { zh: '硬件中心', en: 'Hardware' },
    children: [
      {
        name: { zh: '打印机驱动', en: 'Printer Drivers' },
        items: [
          {
            id: 'printer-drivers',
            title: { zh: '打印机驱动下载', en: 'Printer Drivers Download' },
            files: {
              zh: 'printer/printer-drivers-cn.md',
              en: 'printer/printer-drivers-en.md'
            }
          }
        ]
      }
    ]
  },

  software: {
    name: { zh: '下载中心', en: 'Downloads' },
    children: [
      {
        name: { zh: '软件下载', en: 'Software' },
        items: [
          {
            id: 'software-download-1',
            title: { zh: '新人培训工具下载', en: 'New Hire Training Tools' },
            files: {
              zh: 'software/download-1-cn.md',
              en: 'software/download-1-en.md'
            }
          },
          {
            id: 'software-download-2',
            title: { zh: '餐厅软件下载', en: 'Restaurant Software' },
            files: {
              zh: 'software/download-2-cn.md',
              en: 'software/download-2-en.md'
            }
          }
        ]
      }
    ]
  },

  shoppinglist: {
    name: { zh: '购买建议', en: 'Shopping' },
    children: [
      {
        name: { zh: '产品推荐', en: 'Recommendations' },
        items: [
          {
            id: 'shopping-list',
            title: { zh: '购买清单', en: 'Shopping List' },
            files: {
              zh: 'shoppinglist/shoppinglist-cn.md',
              en: 'shoppinglist/shoppinglist-en.md'
            }
          }
        ]
      }
    ]
  }
};
