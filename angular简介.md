# Aangular简介

## 模板 和 数据绑定

- {{}}
``` bash
 <span>{{var}}</span>
```
- *ng-if
``` bash
*ngIf="expression"
```
- *ng-for
``` bash
*ngFor="let item of items; let i=index"
```
- [ngSwitch]
``` bash
<span [ngSwitch]="">
    <p *ngSwitchCase="true">

    </p>
    <p *ngSwitchCase="false">

    </p>
    <p *ngSwitchDefault>

    </p>
</span>
```
- 变量绑定 []
- 事件绑定 ()
- 双向绑定 [()]

## 组件
- 生命周期
  钩子 | 用途及时机
  --- | ---
  ngOnChanges() | 当 Angular（重新）设置数据绑定输入属性时响应。 该方法接受当前和上一属性值的 SimpleChanges 对象当被绑定的输入属性的值发生变化时调用，首次调用一定会发生在 ngOnInit() 之前。
  ngOnInit() | 在 Angular 第一次显示数据绑定和设置指令/组件的输入属性之后，初始化指令/组件。在第一轮 ngOnChanges() 完成之后调用，只调用一次。
  ngDoCheck() | 检测，并在发生 Angular 无法或不愿意自己检测的变化时作出反应。在每个 Angular 变更检测周期中调用，ngOnChanges() 和 ngOnInit() 之后。
  ngAfterContentInit() | 当把内容投影进组件之后调用。第一次 ngDoCheck() 之后调用，只调用一次。
  ngAfterContentChecked() | 每次完成被投影组件内容的变更检测之后调用。
  ngAfterContentInit() | 和每次 ngDoCheck() 之后调用
  ngAfterViewInit() | 初始化完组件视图及其子视图之后调用。第一次 ngAfterContentChecked() 之后调用，只调用一次。
  ngAfterViewChecked() | 每次做完组件视图和子视图的变更检测之后调用。
  ngAfterViewInit() | 和每次 ngAfterContentChecked() 之后调用。
  ngOnDestroy() |当 Angular 每次销毁指令/组件之前调用并清扫。 在这儿反订阅可观察对象和分离事件处理器，以防内存泄漏。在 Angular 销毁指令/组件之前调用。

- 组件交互
  - Input()
  - Output()
## 模块
- @NgModule() 
  ``` bash
    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            AppRoutingModule
        ],
        providers: []
    })
  ```
## 依赖注入
- @Injectable()
  *  在需要注入的类上使用@Injectable() 装饰器 ，在需要引入的组件或者模块的providers去注册。

## 路由
- 路由配置
    ```bash
    {
        path: '/',
        component: TodoDashboardComponent,
    }
    ```
   -  惰性加载
   ```bash
    {
        path: '',
        loadChildren: './features/routes.module#RoutesModule'
    }
   ```
   - 子路由
   ```bash
    {
        path: '',
        component: RoutesComponent,
        children: [
            { path: '', redirectTo: 'todo', pathMatch: 'full' },
            { path: 'todo', loadChildren: './todo/todo.module#TodoModule'}
       ],
    }
   ```
   - 带参数路由
   ```bash
    {
        path: ':status',
        component: TodoDashboardComponent,
    }
    ```
    
    *  这样配置的时候这个参数是必须，如果没有这个参数就无法匹配到这个路由，如果想要一个非必须的参数可以直接在链接上添加查询参数或者angular自己格式的参数;id=15;foo=foo


- 路由出口

```bash
<router-outlet></router-outlet>
```
- 获取路由参数
  *  注入ActivatedRoute这个类，然后使用ActivatedRoute.params 去获取对应的参数
- 路由跳转
    - 链接方式
        ``` bash
            <a [routerLink]="/"> test </a>
        ```   
        -  指定必须参数
        ```bash
        <a [routerLink]="['/', id]">
        ```
         -  指定非必须参数
        ```bash
        <a [routerLink]="['/', { id: '1' }]"></a>
        ```
    - 编程方式
        *  注入Router这个类,然后使用navigate方法去跳转
        ```bash
        this.router.navigate(['/todo']);
        ```
        -  指定必须参数
        ```bash
         this.router.navigate(['/todo', id ]);
        ```
         -  指定非必须参数
        ```bash
         this.router.navigate(['/todo'] , {
             queryParams: {id: '1'}
         });
        ```
## 网络请求
*  导入并注入HttpClient, 然后就可以使用对应的方法去请求接口，方法的返回为一个Observable对象
