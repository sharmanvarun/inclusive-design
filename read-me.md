curl --location 'http://localhost:3000/transcribe' \
--header 'Content-Type: application/json' \
--data '{"audioContent":"<base64clip>"}'