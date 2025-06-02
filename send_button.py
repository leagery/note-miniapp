import requests

TOKEN = "8161702410:AAE_rRGqg7p2kKp5L-Hyxv2meMBsAjx0nYM"
CHAT_ID = "362286808"
URL = "http://172.31.177.222:5173/"

data = {
    "chat_id": CHAT_ID,
    "text": "Открыть NOTE Mini App",
    "reply_markup": {
        "keyboard": [[
            {
                "text": "Открыть NOTE",
                "web_app": {
                    "url": URL
                }
            }
        ]],
        "resize_keyboard": True,
        "one_time_keyboard": True
    }
}

response = requests.post(f"https://api.telegram.org/bot{TOKEN}/sendMessage", json=data)
print(response.json())
