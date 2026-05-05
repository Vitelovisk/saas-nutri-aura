# NutriAura SaaS (MVP + PWA)

Estrutura inicial para validar o SaaS no celular com instalação PWA e funcionamento offline.

## Rodar local

```bash
python3 -m http.server 4173
```

Acesse: http://localhost:4173

## Deploy de teste no Cloudflare Pages

1. Instalar Wrangler:
   ```bash
   npm i -g wrangler
   ```
2. Login:
   ```bash
   wrangler login
   ```
3. Publicar domínio temporário:
   ```bash
   wrangler pages deploy . --project-name nutriaura-pwa
   ```

No final o Cloudflare retorna uma URL `*.pages.dev` que você pode abrir no celular.

## Próximas features do SaaS

- Autenticação (email/senha + OAuth)
- Cadastro de perfil nutricional
- Geração de plano alimentar por objetivo
- Registro diário e métricas
- API/backend com banco de dados
- Push notifications
