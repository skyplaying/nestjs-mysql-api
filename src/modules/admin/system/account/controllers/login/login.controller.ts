import { Controller, Post, Body } from '@nestjs/common';
import adminConfig from '@src/config/admin.config';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';

import { LoginService } from '../../services/login/login.service';
import { LoginDto } from './dto/login.dto';
import { IpAddress } from '@src/decorators/ip.address';

@ApiTags('后台管理系统-用户登录')
@Controller(`${adminConfig.adminPath}/login`)
export class LoginController {
  constructor(
    private readonly loginService:LoginService,
  ) {}

  @ApiOperation({
    summary: '用户登录',
    description: '用户名可以是手机号码、邮箱、用户名',
  })
  @ApiCreatedResponse({
    type: LoginDto,
    description: '用户登录DTO'
  })
  @Post()
  async adminLogin(
    @Body() loginDto: LoginDto,
    @IpAddress() ipAddress: string,
  ): Promise<any> {
    return this.loginService.adminLogin(loginDto, ipAddress);
  }
}