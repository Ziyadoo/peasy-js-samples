![peasy](https://www.dropbox.com/s/2yajr2x9yevvzbm/peasy3.png?dl=0&raw=1)

# Showcases a middle tier built with peasy-js and consumed by multiple client consumers

A full implementation of a middle tier built using the [peasy-js framework](https://github.com/peasy/peasy-js) and sample consumer clients (WPF, Web API, and ASP.NET MVC) can be found here.  You can clone the repo or download the entire solution as a [zip](https://github.com/peasy/peasy-js-samples/archive/master.zip).

The sample application is a ficticious order entry / inventory management system and provides a nodejs client.  All efforts were made to keep this application as simple as possible to keep the focus on how a middle tier is written with peasy-js and consumed by multiple clients.

The easiest way to get up and running is to set either the WPF project or the ASP.NET MVC project as the startup project and run the application.  By default, these projects are configured to use in-memory implementations of the [data proxies](https://github.com/peasy/Peasy.NET/wiki/Data-Proxy).

However, there is a multitude of configuration possibilities.  The [configurations](https://github.com/peasy/Samples#configurations) section provides details on setting up many potential configurations.

### SQL Server Setup

The sample applications can be configured to interact with a SQL Server database.  Here are the steps to setup a SQL Server database for use by the sample applications:

1.) In package manager console, select ```Orders.com.DAL.EF``` in the Default project drop down list

2.) Execute the following command: ```update-database -verbose```

![sql-setup](https://www.dropbox.com/s/g7x7oss660iz1ms/sql-setup.png?dl=0&raw=1)

### Configurations

Because these clients consume a middle tier written with peasy, they can be configured in different ways to suit your needs.  Below are multiple available configurations that serve to showcase how you might run and/or deploy applications consuming your middle tier written with peasy.

* [WPF &#8594; In Memory](https://github.com/peasy/Samples/wiki/Configuring-WPF-%E2%86%92--In-Memory)
* [WPF &#8594; SQL Server](https://github.com/peasy/Samples/wiki/Configuring-WPF-%E2%86%92-SQL-Server)
* [WPF &#8594; Web API &#8594; In Memory](https://github.com/peasy/Samples/wiki/Configuring-WPF-%E2%86%92-Web-API-%E2%86%92-In-Memory)
* [WPF &#8594; Web API &#8594; SQL Server](https://github.com/peasy/Samples/wiki/Configuring-WPF-%E2%86%92-Web-API-%E2%86%92-SQL-Server)
* [ASP.NET MVC &#8594; In Memory](https://github.com/peasy/Samples/wiki/Configuring-ASP.NET-MVC-%E2%86%92-In-Memory)
* [ASP.NET MVC &#8594; SQL Server](https://github.com/peasy/Samples/wiki/Configuring-ASP.NET-MVC-%E2%86%92-SQL-Server)
* [ASP.NET MVC &#8594; Web API &#8594; In Memory](https://github.com/peasy/Samples/wiki/Configuring-ASP.NET-MVC-%E2%86%92-Web-API-%E2%86%92-In-Memory)
* [ASP.NET MVC &#8594; Web API &#8594; SQL Server](https://github.com/peasy/Samples/wiki/Configuring-ASP.NET-MVC-%E2%86%92-Web-API-%E2%86%92-SQL-Server)
* [Multiple Clients &#8594; Web API &#8594; (In Memory or SQL Server)](https://github.com/peasy/Samples/wiki/Configuring-Multiple-Clients-%E2%86%92-Web-API-%E2%86%92-(In-Memory-or-SQL-Server))

### Videos

An application walkthru of the WPF Application can be viewed [here](https://youtu.be/EdBKA6m_HKY).

An application walkthru of the ASP.NET MVC Application can be viewed [here](https://youtu.be/8axAQ-s2rEQ).

### Solution and Project Structure

An overview of the solution and all of the projects can be viewed [here](https://github.com/peasy/Samples/wiki/Solution-and-project-structure).
