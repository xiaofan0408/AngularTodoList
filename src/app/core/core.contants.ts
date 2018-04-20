import { HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

/* 环境配置 */
export const ENVIRONMENT = environment;

/* api接口配置 */
export const API_ROOT = environment.api;

/* 全局配置头部选项
示例
{
    withCredentials: false
}
*/
export const HTTP_OPTIONS: {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    responseType?: 'json';
    withCredentials?: boolean;
} = null;
