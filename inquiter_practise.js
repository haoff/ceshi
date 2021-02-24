/**
type：表示提问的类型，包括：input, confirm, list, rawlist, expand, checkbox, password, editor；
name: 存储当前问题回答的变量；
message：问题的描述；
default：默认值；
choices：列表选项，在某些type下可用，并且包含一个分隔符(separator)；
validate：对用户的回答进行校验；
filter：对用户的回答进行过滤处理，返回处理后的值；
transformer：对用户回答的显示效果进行处理(如：修改回答的字体或背景颜色)，但不会影响最终的答案的内容；
when：根据前面问题的回答，判断当前问题是否需要被回答；
pageSize：修改某些type类型下的渲染行数；
prefix：修改message默认前缀；
suffix：修改message默认后缀。
 */

const inquirter = require('inquirer');

const promptList = [
	{
		type: 'input', // 输入类型
		message: '请输入文件名：', // 提示信息
		name: 'fileName', // 获取输入参数
		default: 'this is a newFile' // 默认值
	},
	{
		type: 'input',
		message: '请输入手机号:',
		name: 'phone',
		validate: function(val) {
			if (val.length !== 11) {
				// 校验位数
                return '请输入11位数字';
			}
			return true;
		}
	},
	{
		type: 'confirm',
		message: '是否使用监听？',
		name: 'watch',
		prefix: '*'
	},
	{
		type: 'list',
		message: '请选择一种list水果:',
		name: 'fruit',
		choices: [ 'APPLE', 'PEAR', 'BANANA' ],
		filter: function(val) {
			// 使用filter将回答变为小写
			return val.toLowerCase();
		}
	},
	{
		type: 'rawlist',
		message: '请选择一种rawList水果:',
		name: 'fruitRaw',
		choices: [ 'Apple', 'Pear', 'Banana' ]
	},
	{
		type: 'expand',
		message: '请选择一种expend水果：',
		name: 'fruit_expand',
		choices: [
			{
				key: 'a',
				name: 'Apple',
				value: 'apple'
			},
			{
				key: 'O',
				name: 'Orange',
				value: 'orange'
			},
			{
				key: 'p',
				name: 'Pear',
				value: 'pear'
			}
		]
	},
	{
		type: 'checkbox',
		message: '选择check颜色:',
		name: 'color_check',
		choices: [
			{
				name: 'red'
			},
			new inquirter.Separator('--- ---'), // 添加分隔符
			{
				name: 'blur',
				checked: true // 默认选中
			},
			{
				name: 'green'
			},
			new inquirter.Separator('--- ---'), // 自定义分隔符
			{
				name: 'yellow'
			}
		]
	},
	{
		type: 'checkbox',
		message: '选择颜色:',
		name: 'color',
		choices: [ 'red', 'blur', 'green', 'yellow' ],
		pageSize: 2 // 设置行数
	},
	{
		type: 'password', // 密码为密文输入
		message: '请输入密码：',
		name: 'pwd'
	},
	{
		type: 'editor',
		message: '请输入备注：',
		name: 'editor'
	}
];

inquirter.prompt(promptList).then(answers => {
    console.log(answers); // 返回的结果
    process.exit(0)
  })
