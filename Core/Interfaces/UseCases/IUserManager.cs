﻿using Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces.UseCases
{
    public interface IUserManager
    {
        List<User> GetAllUser();
    }
}
