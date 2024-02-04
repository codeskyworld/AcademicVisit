using Microsoft.EntityFrameworkCore;
using AcademicVisit.Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

builder.Services.AddDbContext<DataContext>(
    o=>o.UseNpgsql(builder.Configuration.GetConnectionString("AcademicVisitDB")));

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

var services = app.Services.GetService<IServiceCollection>();
var configurations = app.Services.GetService<IConfiguration>();
services?.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options => {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = configurations?["Jwt:Issuer"],
            ValidAudience = configurations?["Jwt:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configurations?["Jwt:Key"] ?? string.Empty))
        };
    });
services?.AddMvc();
services?.AddControllers();



//Enable CORS
app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

// Configure the HTTP request pipeline.

app.UseSwagger();
app.UseSwaggerUI();


app.UseRouting();

app.UseAuthentication(); 

app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.Run();
