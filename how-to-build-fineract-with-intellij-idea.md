## Building Apache Fineract® with IntelliJ IDEA

### Prerequisites
1. **Java**: Ensure you have Java Development Kit (JDK) installed. Apache Fineract® typically requires Java 17 (Java 21 is not yet supported).
2. **Git**: You'll need Git to clone the Apache Fineract® source code from the repository.
3. **IntelliJ IDEA**: Install IntelliJ IDEA (Community or Ultimate edition).
### Steps
1. **Clone the Apache Fineract® Repository:**
   - Open a terminal or command prompt and navigate to the directory where you want to store the Apache Fineract® source code.
   - Run the following command to clone the repository:
     ```bash
     git clone https://github.com/apache/fineract.git
     ```
2. **Import the Project into IntelliJ IDEA:**
   - Open IntelliJ IDEA.
   - Click on `File` > `Open...` and select the `fineract` directory you cloned in step 1. IntelliJ will recognize it as a Gradle project.
   - IntelliJ IDEA will analyze the project and download its dependencies.
3. **Configure JDK:**
   - Verify that IntelliJ IDEA is using the correct Java SDK. Go to `File` > `Project Structure`.
   - In the Project Structure dialog, under `Project`, make sure the `Project SDK` is set to the appropriate Java version (Java 17 is the latest supported).
4. **Gradle Configuration:**
   - Open the `build.gradle` file in the project root directory.
   - IntelliJ IDEA will automatically start downloading the dependencies, if not you can do it manually as well by opening the "Gradle" window and click on `Reload All Gradle Projects`.
   - Further configurations can be found in the `settings.gradle` file
5. **Set Up Run Configurations:**
   - Go to `Run` > `Edit Configurations`.
   - Click the `+` button and select `Gradle`.
   - In the configuration settings:
       - Set the Name (e.g., "Fineract").
       - Choose the `fineract` directory as Gradle project.
       - Set `bootRun` as the Run command.
6. **Create two databases**
   - Create `fineract_tenants` and `fineract_default` databases
     - **MariaDB** (default db engine)
       - Execute `createDB` gradle task with the following params:
         - ```bash
           ./gradlew createDB -PdbName=fineract_tenants
           ./gradlew createDB -PdbName=fineract_default
           ``` 
     - **MySql**
       - Execute `createMySQLDB` gradle task with the following params:
         - ```bash
           ./gradlew createMySQLDB -PdbName=fineract_tenants
           ./gradlew createMySQLDB -PdbName=fineract_default
           ```
     - **Postgres**
       - Execute `createPGDB` gradle task with the following params:
         - ```bash
           ./gradlew createPGDB -PdbName=fineract_tenants
           ./gradlew createPGDB -PdbName=fineract_default
           ```
7. **Build the Project:**
   - Go to `Run` > `Run 'Fineract'`.
   - IntelliJ IDEA will build and run the Apache Fineract® server. You can access it using a web browser at `https://localhost:8443/fineract-provider`.

This should get you started with building and running Apache Fineract® using IntelliJ IDEA. 

### Default configuration
- By default the application will be using a self-signed TLS protocol (`https`) and port: `8443`
- By default the application will connect to MariaDB on localhost (port:`3306`).
  * Default credentials: `root/mysql`
### Optional extra configurations
1. Use `http` instead of `https` and use `8080` port instead of `8443`
  - Set the following `Environment variables`:
    - FINERACT_SERVER_SSL_ENABLED=false
    - server.port=8080
2. Use `Postgres` as Database engine
   - Set the following `Environment variables`:
     - FINERACT_HIKARI_DRIVER_SOURCE_CLASS_NAME=org.postgresql.Driver
     - Connecting to `fineract_tenants` database
       ``` 
       FINERACT_HIKARI_JDBC_URL=jdbc:postgresql://localhost:5432/fineract_tenants
       FINERACT_HIKARI_USERNAME=postgres
       FINERACT_HIKARI_PASSWORD=postgres
       ```
     - Connecting to `fineract_default` database
       ```
       FINERACT_DEFAULT_TENANTDB_PORT=5432
       FINERACT_DEFAULT_TENANTDB_PWD=postgres
       FINERACT_DEFAULT_TENANTDB_UID=postgres
       ```

### Important
Keep in mind that Apache Fineract® is a complex project, and you may encounter issues or need to configure additional settings based on your specific environment and requirements. It's a good practice to refer to the official Apache Fineract® documentation and the project's developer community for more details and troubleshooting!
