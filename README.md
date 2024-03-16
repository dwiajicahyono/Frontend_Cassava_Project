# Use Your brain before use this frontend

## Available Role

1. Administrator
2. Farmer
3. Pabrik
4. Logistik

## Tambahkan Protected route

1. Datalahan
2. Data-logistik
   useEffect(() => {
   if (isError) {
   navigate("/");
   }
   if (user && (user.role !== "admin" && user.role !== "petani")) {
   navigate("/dashboard");
   }
   }, [isError, user, navigate]);
