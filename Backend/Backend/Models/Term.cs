using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Term
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public virtual ICollection<Course> Courses { get; set; } = new List<Course>();
}
