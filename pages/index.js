<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IP Logger</title>
</head>
<body>
    <h1>Willkommen!</h1>
    <p>Deine IP-Adresse wird erfasst und sicher verarbeitet.</p>
    <script>
        // Webhook-URL von Webhook.site
        const webhookUrl = "https://webhook.site/fed930f5-c488-40be-94b8-abebe0bedef8";

        // Funktion zum Abrufen der öffentlichen IP
        async function getIPAddress() {
            try {
                const response = await fetch("https://api.ipify.org?format=json");
                const data = await response.json();
                return data.ip;
            } catch (error) {
                console.error("Fehler beim Abrufen der IP-Adresse:", error);
                return null;
            }
        }

        // Funktion zum Senden der IP an den Webhook
        async function sendToWebhook(ip) {
            if (!ip) {
                console.error("Keine IP-Adresse verfügbar.");
                return;
            }

            const payload = {
                ip: ip,
                message: `Eine neue IP-Adresse wurde erfasst: ${ip}`
            };

            try {
                await fetch(webhookUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                });
                console.log("IP-Adresse erfolgreich an Webhook gesendet.");
            } catch (error) {
                console.error("Fehler beim Senden an den Webhook:", error);
            }
        }

        // IP-Adresse abrufen und an den Webhook senden
        (async () => {
            const ipAddress = await getIPAddress();
            console.log("Erfasste IP-Adresse:", ipAddress);
            sendToWebhook(ipAddress);
        })();
    </script>
</body>
</html>
