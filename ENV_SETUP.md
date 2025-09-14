# إعداد متغيرات البيئة

## خطوات إعداد المشروع:

### 1. إنشاء ملف `.env.local` في مجلد المشروع:

```bash
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# API Configuration
API=https://ecommerce.routemisr.com/api/v1
```

### 2. استبدال `your-secret-key-here` بمفتاح سري قوي:

يمكنك إنشاء مفتاح سري باستخدام:
```bash
openssl rand -base64 32
```

### 3. إعادة تشغيل الخادم:

```bash
npm run dev
```

## ملاحظات مهمة:

- تأكد من تسجيل الدخول أولاً قبل استخدام الوظائف
- جميع الوظائف تتطلب مصادقة صالحة
- تحقق من console في المتصفح لرؤية أي أخطاء

