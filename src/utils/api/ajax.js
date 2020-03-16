import axios from 'axios';

const ajax = (params, callback) => {

  const {
    // 类型：字符串
    // 默认值：无
    // 描述：请求地址
    url,

    // 类型：布尔
    // 默认值：true
    // 描述：（可选项）是否对url进行编码。默认或传true时，Android将始终对url编码，而iOS只有在url不合法（如存在中文字符）的时候才进行编码。如果url中有特殊字符需要编码的，建议先在js层进行编码，然后此参数传false。
    // encode = true,

    // 类型：字符串
    // 默认值：无
    // 描述：（可选项）该字段用于传给cancelAjax方法来取消请求，如果传入该字段，请保证各个ajax的tag字段唯一
    // tag,

    // 类型：字符串
    // 默认值：get
    // 描述：（可选项）异步请求方法类型
    // 取值范围：get, post, put, delete, head, options, trace, patch
    method = 'get',

    // 类型：布尔
    // 默认值：false
    // 描述：（可选项）是否缓存，若缓存，下次没网络时请求则会使用缓存，仅在get请求有效
    // cache = false,

    // 类型：数字
    // 默认值：30
    // 描述：（可选项）超时时间，单位秒
    timeout = 30,

    // 类型：字符串
    // 默认值：json
    // 描述：（可选项）返回数据类型。若该字段传json，接收到服务器返回的数据后会尝试将其转换成JSON对象，如果无法转成JSON对象，将返回数据类型错误
    // 取值范围：
    // json        //返回数据为 JSON 对象
    // text        //返回数据为字符串类型
    dataType = 'json',

    // 类型：字符串
    // 默认值：utf-8
    // 描述：（可选项）当响应头里面没有返回字符集编码时，使用此编码来解析数据
    // charset = 'utf-8',

    // 类型：JSON 对象
    // 默认值：无
    // 描述：（可选项）设置请求头数据。建议里面的key使用首字母大写的形式，如 User-Agent
    headers,

    // 类型：布尔
    // 默认值：false
    // 描述：（可选项）是否实时返回上传文件进度
    // report = false,

    // 类型：布尔
    // 默认值：false
    // 描述：（可选项）是否需要返回所有 response 信息（包括响应头、消息体、状态码），为 true 时，返回的头信息获取方法(ret.headers)，消息体信息获取方法(ret.body)，状态码获取方法(ret.statusCode)
    returnAll = false,

    // 类型：JSON 对象
    // 默认值：无
    // 描述：（可选项）POST 数据，method 为 get 时不传。以下字段除了 values 和 files 可以同时使用，其它参数都不能同时使用。
    // 内部字段：
    // {
    //     stream："",  //以二进制流的方式提交文件。stream为文件路径（字符串类型），支持绝对路径，以及fs://、cache://、box://等文件路径协议。可直接使用其他端API返回的结果，如api.getPicture回调的ret.data等
    //     body："",    //以纯文本的方式提交数据，body支持字符串及JSON对象（若要校验数据完整性，需将JSON对象转换成字符串再传入）。提交JSON对象时，需设置application/json类型的Content-Type头
    //     values：{},  //以表单方式提交参数（JSON对象）, 如 {"field1": "value1", "field1": "value2"} (直接传JSON对像.)
    //     files：{}    //以表单方式提交文件，支持多文件上传（JSON对象）,如 {"file": "path"}，也支持同一字段对应多文件：{"file":["path1","path2"]}。文件路径，支持绝对路径，以及fs://、cache://、box://等文件路径协议。可直接使用其他端API返回的结果，如api.getPicture回调的ret.data等.
    // }
    data = {},

    // 类型：JSON 对象
    // 默认值：无
    // 描述：（可选项）用于https请求开启双向认证的情况下，客户端配置p12安全证书设置。
    // 内部字段：
    // {
    //     path:'',          //p12证书路径，支持fs://、widget://、cache://等文件路径协议，字符串类型
    //     password:''       //证书密码，字符串类型
    // }
    // certificate,

    // 类型：字符串
    // 默认值：none
    // 描述：（可选项）设置请求安全模式。设置后，若检测到数据有安全风险时将返回“不安全的数据”错误
    // 取值范围：
    // none              //不做数据安全检查
    // both              //对请求和响应的数据做安全检查
    // request           //对请求数据做安全检查
    // response          //对响应的数据做安全检查
    // safeMode = 'none',

    // 类型：JSON 对象
    // 默认值：无
    // 描述：（可选项）设置代理请求服务器。
    // 内部字段：
    // {
    //     host:          //服务器地址，字符串类型
    //     port:          //服务器端口，数字类型
    // }
    proxy,
  } = params;

  const config = {
    url,
    method,
    baseURL: '',
    headers,
    timeout: timeout * 1000,
    responseType: dataType,
    proxy: proxy || false,
  };

  if (method === 'post') {
    // post参数
    config.data = data.values;
  }

  axios(config).then(res => {
    console.log(res);

    // 根据returnAll，控制返回的内容
    const ret = returnAll ? {
      headers: res.headers,
      body: res.data,
      statusCode: res.status
    } : res.data;

    callback(ret, null);
  }).catch(err => {
    console.log(err);
    callback(null, err);
  })
}

export default ajax;