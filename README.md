# Api integration DataTable Project

This project is a React application that displays data in a table format using TailwindCSS for styling and FontAwesome for icons.

## Features

- Displays data in a table
- Fetches data from an API
- Styled with TailwindCSS
- Icons with FontAwesome

## Setup Instructions

1. **Clone the Repository**
    ```bash
    git clone https://github.com/yourusername/datatable-project.git
    cd datatable-project
    ```

2. **Install Dependencies**
    ```bash
    npm install
    ```

3. **Run the Application**
    ```bash
    npm start
    ```

4. **Build the Application**
    ```bash
    npm run build
    ```

## API Integration

This project fetches data from the following API endpoint: http://3.88.1.181:8000/products/public/catalog


## TailwindCSS Customization

To add custom colors or other TailwindCSS configurations, edit the `tailwind.config.js` file.

## Usage

- The `DataTable` component is responsible for displaying the data in a table format.
- The `Navbar` component includes a search bar and a user profile section with a notification bell.

## Example Data Format

Ensure your API returns data in the following format:

```json
[
  {
    "id": 1,
    "SN": 1,
    "Image": "path/to/image1.jpg",
    "SKU": "SKU123",
    "Name": "Product 1",
    "Title": "Title 1",
    "Description": "Description 1",
    "Brand": "Brand 1",
    "Cost": "$10.00",
    "Quantity": 5,
    "Size": "M"
  },
  ...
]


### Step 2: Push to a Public Repository

1. **Initialize a new Git repository** (if you haven't already):
    ```bash
    git init
    ```

2. **Add all files and commit**:
    ```bash
    git add .
    git commit -m "Initial commit"
    ```

3. **Create a new repository on GitHub**:
    - Go to [GitHub](https://github.com) and create a new repository (e.g., `api-integration`).

4. **Add the remote repository and push**:
    ```bash
    git remote add origin https://github.com/yourusername/datatable-project.git
    git push -u origin main
    ```

### Step 3: Send the Public Repo Link

After pushing your code to GitHub, you can share the repository link (e.g., `https://github.com/yourusername/api-integration`) as required.

Replace `yourusername` with your actual GitHub username and ensure the repository name matches the one you created on GitHub.

Now, your project should have a comprehensive `README.md`, and the code will be available in a public GitHub repository for others to access.
