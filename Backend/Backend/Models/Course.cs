using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Course
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public int? IdTerm { get; set; }

    public virtual Term? IdTermNavigation { get; set; }
}
