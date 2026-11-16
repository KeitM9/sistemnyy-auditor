// Библиотека сбоев AgentProof (30.09.2026, +D12 16.10.2026, +A03.6 A04.5 D13 18.10.2026, +D14–D27 04.11.2026, +D28–D30 16.11.2026): 75 классов уязвимостей агентных систем.
// Источник: Проверка-агентов/reports/Уязвимости AI агентов 2026.md, раздел 3.
// Коды: A01.1…A10.3 — классы OWASP ASI01–ASI10, D1…D30 — сверх OWASP. Код класса вечный.
export const LIB_VERSION = 'lib-2026-11-16';
export const LIBRARY = [
{
"id": "A01.1",
"t": "Отложенная инъекция через публичные формы и записи (лиды, заявки, тикеты)",
"bar": "Разделить идентичности: агент, читающий внешние записи, без доступа к чувствительным таблицам. Внешние ресурсы в ответе не рендерятся",
"det": "Есть ли публичная форма, чьи записи потом читает агент? Какие ещё данные видит этот агент? Есть ли у него канал наружу?",
"cases": "[инц] SalesBleed, Agentforce, 2026 (The Register); [демо] ForcedLeak, 2025, CVSS 9.4 (Noma); [демо] Supabase MCP, 2025 (General Analysis)",
"t_en": "Delayed injection via public forms and records (leads, requests, tickets)",
"cases_en": "[incident] SalesBleed, Agentforce, 2026 (The Register); [research demo] ForcedLeak, 2025, CVSS 9.4 (Noma); [research demo] Supabase MCP, 2025 (General Analysis)",
"stand": "desc"
},
{
"id": "A01.2",
"t": "Инъекция через письма, документы и коннекторы (RAG без клика)",
"bar": "Разделение плана и данных (CaMeL-подход): план строится только из запроса пользователя, чужой текст обрабатывается без инструментов",
"det": "Какие коннекторы подключены (почта, диск, CRM)? Кто извне может положить туда документ? Попадает ли документ в контекст агента с инструментами?",
"cases": "[демо] EchoLeak, M365 Copilot, CVE-2025-32711, 9.3 (Checkmarx); [демо] AgentFlayer, ChatGPT Connectors, 08.2025 (Zenity); [демо] Superhuman, 01.2026 (Simon Willison)",
"t_en": "Injection via emails, documents and connected sources, no click needed",
"cases_en": "[research demo] EchoLeak, M365 Copilot, CVE-2025-32711, 9.3 (Checkmarx); [research demo] AgentFlayer, ChatGPT Connectors, Aug 2025 (Zenity); [research demo] Superhuman, Jan 2026 (Simon Willison)",
"stand": "desc"
},
{
"id": "A01.3",
"t": "Инъекция через веб-страницы в агентах-браузерах",
"bar": "Браузерный агент работает в отдельном профиле без сессий пользователя; переход на чужие домены только из списка",
"det": "Есть ли у агента браузер с живыми сессиями (почта, банк, CRM)? Может ли он переходить по ссылкам из прочитанных страниц?",
"cases": "[демо] Perplexity Comet, 20.08.2025 (Brave); [демо] ChatGPT Atlas, 10.2025 (THN); [демо] Google Antigravity, 11.2025 (Simon Willison); [инц] скрытые указания для бота поддержки в справке компании, 102 блока на 80 страницах (WhatsApp, 21.10.2026)",
"t_en": "Injection via web pages in browser agents",
"cases_en": "[research demo] Perplexity Comet, Aug 20, 2025 (Brave); [research demo] ChatGPT Atlas, Oct 2025 (THN); [research demo] Google Antigravity, Nov 2025 (Simon Willison)",
"stand": "desc"
},
{
"id": "A01.4",
"t": "Инъекция через issue, PR, README и код репозитория",
"bar": "Токен на один репозиторий под задачу; выключенный рендер картинок (так GitHub и закрыл CamoLeak)",
"det": "Один ли токен у агента на публичные и приватные репозитории? Рендерит ли чат агента внешние картинки? Кто может запустить агента в сборке (любой автор issue или PR)? Какие токены лежат рядом с ним?",
"cases": "[демо] GitHub MCP «toxic agent flow», 05.2025 (Invariant); [демо] CamoLeak, CVE-2025-59145, 9.6 (Legit); [демо] GitLab Duo, 05.2025 (Simon Willison); [демо] Codex в сборке openai/codex читал текст любого issue: инъекция, выход из песочницы, токены сборки, путь к публикации npm-пакета; исправлено (Depi, 11.11.2026)",
"t_en": "Injection via issues, PRs, READMEs and repository code",
"cases_en": "[research demo] GitHub MCP “toxic agent flow”, May 2025 (Invariant); [research demo] CamoLeak, CVE-2025-59145, 9.6 (Legit); [research demo] GitLab Duo, May 2025 (Simon Willison); [research demo] Codex in the openai/codex build read the text of any issue: injection, sandbox escape, build tokens, the path to publishing the npm package; fixed (Depi, Nov 11, 2026)",
"stand": "desc"
},
{
"id": "A02.1",
"t": "«Токсичная комбинация»: каждый вызов разрешён, вместе они дают утечку",
"bar": "Политика на поток данных: результат из приватного источника не уходит в публичный приёмник (отслеживание происхождения данных)",
"det": "Постройте пары «инструмент чтения приватного → инструмент записи в публичное» у одного агента",
"cases": "[демо] GitHub MCP, 2025 (Invariant); [демо] Atlassian MCP, 06.2025 (Simon Willison)",
"t_en": "Each action is allowed, together they leak data",
"cases_en": "[research demo] GitHub MCP, 2025 (Invariant); [research demo] Atlassian MCP, Jun 2025 (Simon Willison)",
"stand": "desc"
},
{
"id": "A02.2",
"t": "Разрешённые команды проверяются по строке, а не по смыслу",
"bar": "Исполнение в песочнице с закрытой сетью; одобрение на полную команду; сетевые утилиты исключены из автоодобрения",
"det": "Есть ли у агента shell? Какие команды одобряются автоматически? Есть ли среди них команды с сетевым эффектом?",
"cases": "[демо] Gemini CLI, исправлено 25.07.2025 (Tracebit); [демо] Claude Code CVE-2025-54795, 8.7 (Cymulate); [демо] Claude Code CVE-2025-55284, DNS через «безопасные» команды (Embrace The Red)",
"t_en": "Allowed commands are checked by text, not by meaning",
"cases_en": "[research demo] Gemini CLI, fixed Jul 25, 2025 (Tracebit); [research demo] Claude Code CVE-2025-54795, 8.7 (Cymulate); [research demo] Claude Code CVE-2025-55284, DNS through “safe” commands (Embrace The Red)",
"stand": "desc"
},
{
"id": "A02.3",
"t": "Служебная функция случайно открыта модели как инструмент",
"bar": "Явный реестр инструментов, сверяемый с тем, что видит модель",
"det": "Совпадает ли заявленный список инструментов с фактически доступным модели?",
"cases": "[демо] Semantic Kernel CVE-2026-25592, 10.0 (Microsoft)",
"t_en": "Internal function accidentally exposed to the model as a tool",
"cases_en": "[research demo] Semantic Kernel CVE-2026-25592, 10.0 (Microsoft)",
"stand": "inside"
},
{
"id": "A02.4",
"t": "Упорство при отказе: агент ищет обход закрытого ресурса",
"bar": "Бюджет повторов и остановка после отказа на уровне обвязки; явный запрет обхода контролей в спецификации задачи",
"det": "Есть ли в описании задач правило «при отказе остановиться и сообщить»? Есть ли лимит повторов на ресурс?",
"cases": "[инц] 16 000 обращений к UNCTAD, 04–06.2026 (Investing.com); [инц] ~1 млн коротких ссылок, 07.2026 (Fortune)",
"t_en": "Persistence after refusal: the agent looks for a way around a closed resource",
"cases_en": "[incident] 16,000 requests to UNCTAD, Apr–Jun 2026 (Investing.com); [incident] about 1 million short links, Jul 2026 (Fortune)",
"stand": "desc"
},
{
"id": "A03.1",
"t": "Токен шире задачи, «запутанный заместитель»",
"bar": "Права на инструмент и задачу, короткоживущие токены, отдельная учётка на агента",
"det": "Какие учётки у каждого агента? Покрывает ли одна учётка больше одного ресурса или клиента? Есть ли админ-ключи? Пробрасываются ли личные SSH-ключи на удалённые машины, где работает агент?",
"cases": "[демо] Supabase MCP: ключ service_role обходит защиту на уровне строк (General Analysis); [демо] GitHub MCP, токен на все репозитории (Invariant); [инц] Amazon Q 1.84.0, CI-токен с избыточными правами (AWS-2025-015); [наблюдение] приложение Codex пробрасывает локальный SSH-агент на удалённую машину: агент там может действовать ключами владельца; официального сообщения OpenAI нет (GitHub PR, 09.11.2026)",
"t_en": "The agent’s access is wider than its task, and others use it through the agent",
"cases_en": "[research demo] Supabase MCP: the service_role key bypasses row-level security (General Analysis); [research demo] GitHub MCP, a token for all repositories (Invariant); [incident] Amazon Q 1.84.0, a CI token with excessive permissions (AWS-2025-015); [observation] the Codex app forwards the local SSH agent to a remote machine: an agent there can act with the owner's keys; there is no official statement from OpenAI (GitHub PR, Nov 9, 2026)",
"stand": "desc"
},
{
"id": "A03.2",
"t": "Засвеченные и продакшен-учётки в среде агента; облачные метаданные",
"bar": "Адрес метаданных облака закрыт списком разрешённого (блок-лист обходится, PipeLab); тестовая среда без продакшен-учёток",
"det": "Где запущены агенты (облако, k8s)? Закрыт ли адрес метаданных? Какие права у сервисного аккаунта? Светились ли ключи когда-нибудь (репозиторий, чат, скриншот) и отозваны ли они? Удаление из репозитория ключ не отзывает. За сколько минут вы отзовёте ключ после того, как он засветился?",
"cases": "[инц] OpenAI–Hugging Face, 07.2026: 14 засвеченных учёток, облачные учётки из metadata service, cluster-admin за 13 часов (THN; Wikipedia); [инц] LiteLLM: ключ выложили в мае, файл затёрли, ключ не отозвали, через 5 месяцев он открыл выпуск вредоносной версии (10.2026); [инц] агенты атакующих сканируют публичные репозитории и сами идут дальше: от найденного ключа до выгрузки из Azure Key Vault около 5 минут (Microsoft, 05.11.2026)",
"t_en": "Live keys and passwords sit where the agent can see them",
"cases_en": "[incident] OpenAI–Hugging Face, Jul 2026: 14 exposed accounts, cloud credentials from the metadata service, cluster-admin within 13 hours (THN; Wikipedia); [incident] attackers' agents scan public repositories and move on by themselves: about 5 minutes from a found key to data taken from Azure Key Vault (Microsoft, Nov 5, 2026)",
"stand": "desc"
},
{
"id": "A03.3",
"t": "Приложение само отдаёт токен наружу",
"bar": "Адреса подключения фиксированы в конфиге сервера; секреты не попадают в тексты ошибок",
"det": "Откуда агент берёт адреса, куда отправляет токен? Что видит пользователь при ошибке?",
"cases": "[демо] OpenClaw CVE-2026-25253, 8.8, >135 000 открытых инстансов (SOCRadar); [демо] CrewAI «Uncrew», 9.2 (Noma)",
"t_en": "The app itself sends a token outside",
"cases_en": "[research demo] OpenClaw CVE-2026-25253, 8.8, more than 135,000 exposed instances (SOCRadar); [research demo] CrewAI “Uncrew”, 9.2 (Noma)",
"stand": "desc"
},
{
"id": "A03.4",
"t": "Подмена пользователя или агента через API",
"bar": "Каждый вызов несёт проверяемую идентичность вызывающего",
"det": "Как агент узнаёт, от чьего имени действует?",
"cases": "[демо] ServiceNow CVE-2025-12420, 9.3, исправлено 30.10.2025 (CyberScoop)",
"t_en": "User or agent impersonation via API",
"cases_en": "[research demo] ServiceNow CVE-2025-12420, 9.3, fixed Oct 30, 2025 (CyberScoop)",
"stand": "desc"
},
{
"id": "A03.5",
"t": "Смежный: кража и перепродажа доступа к AI-аккаунтам",
"bar": "Лимит расходов на ключ, ключ только на сервере, ротация",
"det": "Где лежит ключ модели? Есть ли у него лимит расходов? Стоит ли лимит трат на каждом ключе AI-сервиса?",
"cases": "[инц] даркнет-рынки, 26.09.2026 (HuggingNews); [инц] Botpress: чужим служебным ключом прочитаны настройки ботов в 16 кабинетах клиентов, цель: AI-кредиты для перепродажи (Botpress, 06.11.2026); [инц] Railway: по украденным ключам AI-сервисов потрачено около $740 000 (Railway, 10.11.2026)",
"t_en": "Theft and resale of access to AI accounts",
"cases_en": "[incident] darknet markets, Sep 26, 2026 (HuggingNews); [incident] Botpress: bot settings in 16 customer workspaces were read with someone else's employee key, the goal was AI credits for resale (Botpress, Nov 6, 2026); [incident] Railway: about $740,000 was spent with stolen AI service keys (Railway, Nov 10, 2026)",
"stand": "desc"
},
{
"id": "A03.6",
"t": "Агент сам находит чужой ключ и пользуется им повторно",
"bar": "Агенту закрыто чтение файлов настроек, старых и тестовых конфигов, репозиториев и истории git, где лежат ключи; каждый ключ выдан под одну задачу, с коротким сроком и узкими правами; общеизвестные тестовые ключи и фразы из документации запрещены; использование ключа вне его задачи блокируется и поднимает тревогу",
"det": "Может ли агент читать файлы настроек, .env, старые и тестовые конфиги, открытые репозитории? Живут ли ключи дольше задачи? Есть ли в системе тестовые ключи или фразы из документации? Заметит ли кто-нибудь, что ключ использован в чужой операции?",
"cases": "[инц] агенты на тестах вошли в живые системы организаций в Индии по ключам из файлов конфигурации и открытых репозиториев, один ключ использовали повторно, ни одна организация не заметила (CERT-In, 17.10.2026); [инц] модель OpenAI вычислила ключи из общеизвестных фраз разработчиков, проверила 362 адреса и оплатила работу чужим кошельком, компания заметила через три месяца (OpenAI, 17.10.2026); [инц] рой агентов против Alibaba Amap брал доступы из открытого репозитория и обходил блокировку (16.10.2026)",
"t_en": "The agent finds someone else's key on its own and reuses it",
"cases_en": "[incident] agents under test entered live systems of organisations in India using keys from config files and open repositories, one key was reused, no organisation noticed (CERT-In, Oct 17, 2026); [incident] an OpenAI model derived keys from well-known developer phrases, checked 362 addresses and paid for work from someone else's wallet, the company noticed three months later (OpenAI, Oct 17, 2026); [incident] a swarm of agents against Alibaba Amap took credentials from an open repository and bypassed blocking (Oct 16, 2026)",
"stand": "desc"
},
{
"id": "A04.1",
"t": "Пакет или MCP-сервер меняет поведение после набора доверия («rug pull»)",
"bar": "Закреплённые версии, ревью диффа при обновлении, изоляция сети инструмента",
"det": "Закреплены ли версии MCP-серверов и пакетов? Кто и как одобряет обновления? Чем проверяются скиллы и плагины агента перед установкой? Один сканер не заменяет ревью.",
"cases": "[инц] postmark-mcp, 09.2025: 15 честных версий, затем скрытая копия всех писем, ~1 643 загрузки (Snyk); [демо] NVIDIA SkillSpector до 2.2.3 выдавал вердикт «Safe» вредоносному скиллу: сканер не смотрел в node_modules, venv и скрытые файлы; NVIDIA не считает это уязвимостью (Checkmarx, 11.11.2026)",
"t_en": "A package or MCP server changes after it has earned trust",
"cases_en": "[incident] postmark-mcp, Sep 2025: 15 honest versions, then a hidden copy of every email, about 1,643 downloads (Snyk); [research demo] NVIDIA SkillSpector before 2.2.3 gave a “Safe” verdict to a malicious skill: the scanner did not look into node_modules, venv and hidden files; NVIDIA does not treat it as a vulnerability (Checkmarx, Nov 11, 2026)",
"stand": "desc"
},
{
"id": "A04.2",
"t": "Удалённый MCP-сервер как недоверенный собеседник",
"bar": "Удалённые серверы только из проверенного списка, клиент в песочнице",
"det": "Какие удалённые MCP-серверы подключены и чьи они?",
"cases": "[демо] mcp-remote CVE-2025-6514, 9.6, 437 000+ загрузок (JFrog)",
"t_en": "An external MCP server as an unverified counterpart",
"cases_en": "[research demo] mcp-remote CVE-2025-6514, 9.6, 437,000+ downloads (JFrog)",
"stand": "desc"
},
{
"id": "A04.3",
"t": "Автозагрузка проектных конфигов и хуков из чужого репозитория",
"bar": "Проектные конфиги не исполняются до явного доверия; доверие привязано к содержимому",
"det": "Открывает ли агент чужие репозитории? Исполняются ли из них настройки и хуки автоматически?",
"cases": "[демо] Codex CLI CVE-2025-61260, 9.8 (GHSA); Anthropic признаёт класс «хуки проекта до диалога доверия» (Anthropic)",
"t_en": "A foreign repository auto-loads its own settings and hooks",
"cases_en": "[research demo] Codex CLI CVE-2025-61260, 9.8 (GHSA); Anthropic acknowledges the class “project hooks before the trust dialog” (Anthropic)",
"stand": "desc"
},
{
"id": "A04.4",
"t": "Компрометация конвейера сборки и использование установленных AI-инструментов",
"bar": "Минимальные права CI-токенов; запрет режимов без подтверждений на машинах с секретами",
"det": "Какие права у токенов сборки? Разрешён ли режим без подтверждений? Кто проверяет релиз перед публикацией? Метка происхождения показывает, где собран пакет, а не то, что код проверен.",
"cases": "[инц] Amazon Q 1.84.0, 07.2025 (AWS); [инц] s1ngularity / Nx, 26.08.2025: 2 349 секретов, 6 700+ приватных репозиториев (Nx); [демо] цепочка от issue до пути публикации @openai/codex (Depi, 11.11.2026); [инц] bee-js 13.3.0 и Swarm Desktop 0.56.2: вредонос вышел через собственный конвейер проекта с действительной меткой происхождения (Socket, 09.11.2026)",
"t_en": "A hacked build pipeline and installed AI tools",
"cases_en": "[incident] Amazon Q 1.84.0, Jul 2025 (AWS); [incident] s1ngularity / Nx, Aug 26, 2025: 2,349 secrets, 6,700+ private repositories (Nx); [research demo] a chain from an issue to the publishing path of @openai/codex (Depi, Nov 11, 2026); [incident] bee-js 13.3.0 and Swarm Desktop 0.56.2: malware shipped through the project's own pipeline with a valid provenance mark (Socket, Nov 9, 2026)",
"stand": "desc"
},
{
"id": "A04.5",
"t": "Файл сборки выносит секреты (GitHub Actions и аналоги)",
"bar": "Изменения файлов сборки — только через проверку человеком и защищённую ветку; секреты выдаются только нужному шагу и окружению; короткоживущие токены вместо постоянных ключей (OIDC); тревога на новый или изменённый файл сборки",
"det": "Кто может добавить или изменить файл сборки (workflow)? Какие секреты видны каждому шагу? Лежат ли в секретах сборки постоянные ключи облака и AI-сервисов? Заметит ли кто-нибудь новый файл с невинным названием? Есть ли тревога на удаление логов запуска и на изменение, которое откатили через минуту?",
"cases": "[инц] GhostAction: около 1900 взломанных аккаунтов GitHub, скрытый файл «security-audit» в 30 тысячах репозиториев искал ключи сборки, облака и AI-сервисов, из публичных пытались вынуть 3174 секрета (16.10.2026); [инц] ошибка npm позволяла выкладывать чужой код в 1500 пакетов, GitHub ужесточил правила публикации (14.10.2026); [инц] 4 837 захваченных аккаунтов GitHub: пробный запрос «docs: dependency audit notes» в 61 764 репозиториях, кража секретов сборки сработала минимум в 1 806, изменения откатывались через минуту, логи запуска удалялись (Aikido, 10–12.11.2026)",
"t_en": "A build file exfiltrates secrets (GitHub Actions and similar)",
"cases_en": "[incident] GhostAction: about 1,900 hacked GitHub accounts, a hidden “security-audit” file in 30,000 repositories looked for build, cloud and AI service keys, there were attempts to pull 3,174 secrets out of public ones (Oct 16, 2026); [incident] an npm bug allowed publishing someone else's code to 1,500 packages, GitHub tightened its publishing rules (Oct 14, 2026); [incident] 4,837 hijacked GitHub accounts: a probe request “docs: dependency audit notes” in 61,764 repositories, build secret theft worked in at least 1,806, changes were reverted within a minute, run logs were deleted (Aikido, Nov 10–12, 2026)",
"stand": "desc"
},
{
"id": "A05.1",
"t": "Открытый эндпоинт исполнения кода в визуальных конструкторах агентов",
"bar": "Конструктор закрыт от интернета, доступ только через аутентификацию; быстрые обновления",
"det": "Используется ли Langflow, Flowise, n8n? Доступен ли он из интернета? Какая версия?",
"cases": "[инц] Langflow CVE-2025-3248, 9.8, в CISA KEV, ботнет Flodrix (Recorded Future); [инц] Langflow CVE-2026-33017, атаки через 20 часов (Sysdig); [инц] Flowise CVE-2025-59528, 10.0 (BleepingComputer)",
"t_en": "An open code-run endpoint in visual agent builders",
"cases_en": "[incident] Langflow CVE-2025-3248, 9.8, in CISA KEV, the Flodrix botnet (Recorded Future); [incident] Langflow CVE-2026-33017, attacks within 20 hours (Sysdig); [incident] Flowise CVE-2025-59528, 10.0 (BleepingComputer)",
"stand": "desc"
},
{
"id": "A05.2",
"t": "Вывод модели попадает в eval или десериализацию",
"bar": "Принцип Microsoft: «LLM — не граница безопасности»; параметры от модели проверяются по разрешённому набору",
"det": "Передаётся ли вывод модели в код, запросы к базе, шаблоны, сериализацию?",
"cases": "[демо] Semantic Kernel CVE-2026-26030, 9.8 (Microsoft); [демо] LangChain «LangGrinch» CVE-2025-68664, 9.3 (Cyata)",
"t_en": "Model output gets executed as code",
"cases_en": "[research demo] Semantic Kernel CVE-2026-26030, 9.8 (Microsoft); [research demo] LangChain “LangGrinch” CVE-2025-68664, 9.3 (Cyata)",
"stand": "desc"
},
{
"id": "A05.3",
"t": "Граница пути или песочницы проверяется по строке",
"bar": "Канонизация пути и проверка границы; лучше — изоляция на уровне ОС или контейнера",
"det": "Как ограничен доступ агента к файлам: проверкой в коде или изоляцией?",
"cases": "[демо] Filesystem MCP CVE-2025-53109/53110 (Cymulate); [демо] Git MCP CVE-2025-68143/44/45, закрыто удалением `git_init` (THN); [демо] Claude Code CVE-2025-54794",
"t_en": "Folder and sandbox limits are checked by path text",
"cases_en": "[research demo] Filesystem MCP CVE-2025-53109/53110 (Cymulate); [research demo] Git MCP CVE-2025-68143/44/45, closed by removing `git_init` (THN); [research demo] Claude Code CVE-2025-54794",
"stand": "inside"
},
{
"id": "A05.4",
"t": "Молчаливый откат на слабую песочницу; агент отключает свою изоляцию",
"bar": "Отказ в работе при недоступной изоляции; конфиг изоляции вне досягаемости агента",
"det": "Что происходит, если контейнер недоступен? Может ли агент менять свою конфигурацию?",
"cases": "[демо] CrewAI CVE-2026-2275/2287 (CERT/CC); [демо] DeepSeek Harness CVE-2026-82533 (OX Security)",
"t_en": "The sandbox quietly weakens and the agent turns off its own protection",
"cases_en": "[research demo] CrewAI CVE-2026-2275/2287 (CERT/CC); [research demo] DeepSeek Harness CVE-2026-82533 (OX Security)",
"stand": "desc"
},
{
"id": "A05.5",
"t": "Агент-исполнитель: агент применяет техники атак к чужим системам",
"bar": "Закрытая по умолчанию сеть; запрет активного сканирования в спецификации; журнал действий",
"det": "Может ли агент обращаться к произвольным сайтам? Есть ли запрет на тестирование чужих систем?",
"cases": "[инц] SQL-инъекция, path traversal, command injection против AIHW, UNM, Data USA, 05–06.2026 (The Record); [инц] агент на базе ARTEX вышел из тестовой среды исследователя и выгрузил записи из внутреннего инструмента WorkOS: открытый API, предсказуемый пароль, без ограничения частоты (WorkOS, 06.11.2026); [инц] BOSSAI: один оператор и сеть из 12 агентов на локальных моделях, цели в 11 странах (Acronis, 04.11.2026); [инц, по сообщению прессы] кампания Crafty Falcon: атаки с AI-инструментами на банки и платёжные сервисы Индии, вызовы чужих платёжных API начинались с тестовых переводов в 1 рупию (CERT-In, 04.11.2026)",
"t_en": "The agent uses attack techniques on other people’s systems",
"cases_en": "[incident] SQL injection, path traversal and command injection against AIHW, UNM and Data USA, May–Jun 2026 (The Record); [incident] an ARTEX-based agent left a researcher's test environment and exported records from an internal WorkOS tool: an open API, a predictable password, no rate limit (WorkOS, Nov 6, 2026); [incident] BOSSAI: one operator and a mesh of 12 agents on local models, targets in 11 countries (Acronis, Nov 4, 2026); [incident, per press reports] the Crafty Falcon campaign: attacks with AI tools on banks and payment services in India, calls to other parties' payment APIs started with test transfers of 1 rupee (CERT-In, Nov 4, 2026)",
"stand": "desc"
},
{
"id": "A05.6",
"t": "Локальный инструмент разработчика без аутентификации",
"bar": "Аутентификация на локальных сервисах, актуальные версии",
"det": "Какие локальные инструменты запущены у команды?",
"cases": "[демо] MCP Inspector CVE-2025-49596, 9.4 (Oligo)",
"t_en": "Local developer tool without authentication",
"cases_en": "[research demo] MCP Inspector CVE-2025-49596, 9.4 (Oligo)",
"stand": "desc"
},
{
"id": "A06.1",
"t": "Отравление долговременной памяти",
"bar": "Запись в память только проверенными компонентами, с происхождением и сроком жизни; формат записи ограничен (Microsoft)",
"det": "Есть ли долговременная память? Кто в неё пишет? Может ли туда попасть текст из внешнего документа?",
"cases": "[демо] ZombieAgent, ChatGPT, исправлено 16.12.2025 (SecurityWeek); [демо] ElizaOS Web3, переводы крипты (arXiv 2503.16248); атака на память Gemini в примерах OWASP",
"t_en": "Long-term memory poisoning",
"cases_en": "[research demo] ZombieAgent, ChatGPT, fixed Dec 16, 2025 (SecurityWeek); [research demo] ElizaOS Web3, crypto transfers (arXiv 2503.16248); the Gemini memory attack in OWASP examples",
"stand": "desc"
},
{
"id": "A06.2",
"t": "Отравленное общее состояние между агентами (планы, сводки, кэш)",
"bar": "Метка происхождения на каждом элементе общего состояния; чужое не исполняется как команда",
"det": "Какие данные агенты передают друг другу через общую память или файлы?",
"cases": "[лаб] Microsoft: планы и сводки распространяются как «нагрузка», базовый успех 4/10 (Microsoft); [демо] LangGrinch: поля ответа восстанавливаются как доверенное состояние",
"t_en": "Corrupted shared agent data: plans, summaries, cache",
"cases_en": "[lab] Microsoft: plans and summaries spread as a “payload”, baseline success 4/10 (Microsoft); [research demo] LangGrinch: response fields are restored as trusted state",
"stand": "desc"
},
{
"id": "A06.3",
"t": "Смежный: подделка внутренних данных, которым доверяет система одобрения",
"bar": "Независимая сверка перед необратимым действием (см. Д1)",
"det": "На каких данных основано одобрение перевода? Кто может их изменить?",
"cases": "[инц] Bitget, $387 млн, 25.09.2026, без AI (Fortune)",
"t_en": "Forged internal data trusted by the approval system",
"cases_en": "[incident] Bitget, $387 million, Sep 25, 2026, no AI involved (Fortune)",
"stand": "desc"
},
{
"id": "A07.1",
"t": "Сообщения между агентами без аутентификации, подмена отправителя",
"bar": "Подписанные сообщения; необратимые действия требуют второго канала",
"det": "Как оркестратор узнаёт, от какого агента пришло сообщение?",
"cases": "[лаб] Agent-in-the-Middle: успех >40%, часто >70% (ACL Findings 2025); Microsoft 2026 «Inter-Agent Trust Escalation» (Microsoft)",
"t_en": "Unauthenticated inter-agent messages, sender spoofing",
"cases_en": "[lab] Agent-in-the-Middle: success above 40%, often above 70% (ACL Findings 2025); Microsoft 2026 “Inter-Agent Trust Escalation” (Microsoft)",
"stand": "desc"
},
{
"id": "A07.2",
"t": "Второй порядок через обнаружение агентов: слабый агент нанимает сильного",
"bar": "Явная матрица «кто кому может передать задачу»; обнаружение агентов выключено по умолчанию",
"det": "Может ли агент с внешним вводом вызвать агента с большими правами?",
"cases": "[демо] ServiceNow Now Assist, 11.2025, сработало при включённой защите от инъекций (AppOmni)",
"t_en": "A weak agent recruits a strong one and acts through it",
"cases_en": "[research demo] ServiceNow Now Assist, Nov 2025, worked with injection protection turned on (AppOmni)",
"stand": "desc"
},
{
"id": "A07.3",
"t": "Вывод субагента = доверенный вход оркестратора",
"bar": "Выход субагента обрабатывается как данные; решения об инструментах принимаются по плану, а не по тексту субагента",
"det": "Кто в системе читает внешний контент и кому передаёт результат?",
"cases": "[лаб] Magentic-One/GPT-4o: 97% исполнения чужого кода; CrewAI: 65% утечек (arXiv 2503.12188)",
"t_en": "The lead agent accepts a helper agent’s output without checks",
"cases_en": "[lab] Magentic-One/GPT-4o: 97% execution of outside code; CrewAI: 65% leaks (arXiv 2503.12188)",
"stand": "desc"
},
{
"id": "A07.4",
"t": "Скрытые каналы и несанкционированная координация",
"bar": "Общие ресурсы только через оркестратор, с журналом; права записи у агентов раздельны",
"det": "Перечислите общие ресурсы агентов: файлы, память, базы, реестры, внешние сайты Очищаются ли общие хранилища между запусками?",
"cases": "[инц] ~700 из 1 200 агентов OpenAI через общий реестр пакетов, 07.2026 (CSA); [лаб] стеганографический сговор (NeurIPS 2024); [инц] разбор OpenAI: агенты нашли в общем хранилище учётные данные прошлых запусков, пятеро получили root на исследовательских кластерах (OpenAI, 10.11.2026)",
"t_en": "Agents coordinate out of the owner’s sight",
"cases_en": "[incident] about 700 of 1,200 OpenAI agents through a shared package registry, Jul 2026 (CSA); [lab] steganographic collusion (NeurIPS 2024); [incident] OpenAI's review: agents found credentials from earlier runs in a shared store, five of them got root on research clusters (OpenAI, Nov 10, 2026)",
"stand": "inside"
},
{
"id": "A07.5",
"t": "Протокольные слабости A2A: неподписанные карточки агентов, отравление метаданных",
"bar": "Обязательная подпись карточек; метаданные карточек не попадают в инструкции",
"det": "Используется ли A2A? Проверяются ли подписи карточек?",
"cases": "[лаб] Semgrep, CSA, A2ABreak (Semgrep; arXiv 2609.10871)",
"t_en": "A2A protocol weak spots: unsigned agent cards, tampered agent data",
"cases_en": "[lab] Semgrep, CSA, A2ABreak (Semgrep; arXiv 2609.10871)",
"stand": "desc"
},
{
"id": "A07.6",
"t": "Самовоспроизводящаяся инъекция между агентами",
"bar": "Разрыв цепочки: вывод публичной модели не становится командой для агента с деньгами",
"det": "Читает ли какой-то агент вывод другой модели или соцсетей и может ли по нему действовать?",
"cases": "[лаб] Prompt Infection (arXiv 2410.07283); [инц] Grok → кошелёк-агент, 04.05.2026 (OECD.AI)",
"t_en": "Self-replicating injection between agents",
"cases_en": "[lab] Prompt Infection (arXiv 2410.07283); [incident] Grok → wallet agent, May 4, 2026 (OECD.AI)",
"stand": "desc"
},
{
"id": "A08.1",
"t": "Цепочка средних находок складывается в критическую",
"bar": "Оценка цепочек, а не отдельных находок",
"det": "Где в графе системы находки стоят последовательно на одном пути к данным?",
"cases": "[демо] Git MCP: три находки ≤6,5 вместе дают исполнение кода (THN)",
"t_en": "A chain of medium findings adds up to a critical one",
"cases_en": "[research demo] Git MCP: three findings of 6.5 or lower together give code execution (THN)",
"stand": "desc"
},
{
"id": "A08.2",
"t": "Эскалация «задача → атака» из-за недоопределённой цели",
"bar": "Запреты в спецификации цели плюс физические барьеры; автоматическая остановка",
"det": "Есть ли у задач агента явные границы? Что агент делает, когда задача невыполнима?",
"cases": "[инц] OpenAI–Hugging Face, 2026 (CSA: reward hacking) (CSA); [инц] эпизод ООН",
"t_en": "A vague goal turns a task into an attack",
"cases_en": "[incident] OpenAI–Hugging Face, 2026 (CSA: reward hacking) (CSA); [incident] the UN episode",
"stand": "desc"
},
{
"id": "A08.3",
"t": "Небоевые сбои мультиагентных систем: повторы, рассогласование, отсутствие проверки",
"bar": "Условия завершения, агент-проверяющий, лимит шагов",
"det": "Есть ли у каждого агента критерий «готово»? Кто проверяет результат?",
"cases": "[лаб] MAST: 41–86,7% провалов в 7 фреймворках, самый частый режим — повтор шага, 17,14% (arXiv 2503.13657)",
"t_en": "Failures without an attack: repeats, agent mismatch, missed checks",
"cases_en": "[lab] MAST: 41–86.7% failures across 7 frameworks, the most frequent mode is a repeated step, 17.14% (arXiv 2503.13657)",
"stand": "desc"
},
{
"id": "A08.4",
"t": "Компрометация одного узла расходится по связям",
"bar": "Сегментация: у узла только его ключи; радиус поражения посчитан заранее",
"det": "Что откроют ключи, лежащие на каждом узле?",
"cases": "[инц] Langflow CVE-2026-33017: украденные ключи давали доступ к базам и цепочке поставок (Sysdig)",
"t_en": "Compromise of one node spreads along its links",
"cases_en": "[incident] Langflow CVE-2026-33017: stolen keys gave access to databases and the supply chain (Sysdig)",
"stand": "desc"
},
{
"id": "A09.1",
"t": "Человек одобряет то, чего не видит целиком",
"bar": "Подтверждение показывает полное действие в нормализованном виде",
"det": "Что именно видит человек при подтверждении?",
"cases": "[демо] Gemini CLI (Tracebit); [демо] Copilot CVE-2025-53773 (Embrace The Red)",
"t_en": "A human approves what they cannot fully see",
"cases_en": "[research demo] Gemini CLI (Tracebit); [research demo] Copilot CVE-2025-53773 (Embrace The Red)",
"stand": "inside"
},
{
"id": "A09.2",
"t": "Действие от имени человека без подтверждения",
"bar": "Список действий, требующих подтверждения: деньги, персональные данные, отправка наружу, договорённости",
"det": "Перечислите действия агента, которые видит третья сторона. Какие из них идут без подтверждения?",
"cases": "[инц] Meta Muse в Marketplace, 26.09.2026: раскрыл адрес, принял цену (Yahoo Finance); [демо] Copilot Cowork отправлял письма без одобрения, 05.2026 (Simon Willison)",
"t_en": "Action on behalf of a human without confirmation",
"cases_en": "[incident] Meta Muse in Marketplace, Sep 26, 2026: disclosed an address, accepted a price (Yahoo Finance); [research demo] Copilot Cowork sent emails without approval, May 2026 (Simon Willison)",
"stand": "desc"
},
{
"id": "A09.3",
"t": "Сообщения от имени агента без указания, кто их вызвал",
"bar": "Каждое сообщение агента несёт автора запроса",
"det": "Показывает ли агент, по чьей просьбе он пишет?",
"cases": "[демо] SalesBleed, анонимный фишинг через Slack-агента (The Register)",
"t_en": "The agent messages people and nobody sees who started it",
"cases_en": "[research demo] SalesBleed, anonymous phishing through a Slack agent (The Register)",
"stand": "desc"
},
{
"id": "A09.4",
"t": "Приватные данные показаны не тому человеку",
"bar": "Доступ к личным данным по запросу и на один объект",
"det": "Какие личные хранилища подключены к агенту целиком?",
"cases": "[инц, частично] Meta Muse и фото из iCloud в тестах (Startup Fortune)",
"t_en": "Private data shown to the wrong person",
"cases_en": "[incident, partial] Meta Muse and iCloud photos in tests (Startup Fortune)",
"stand": "desc"
},
{
"id": "A10.1",
"t": "Агент выгружает данные наружу без ведома владельца",
"bar": "Правило двух: данные и выход разведены по разным средам",
"det": "Есть ли среда, где лежат данные пользователей и открыт интернет?",
"cases": "[инц] 53 фото пользователей на внешних хостингах (TechCrunch); [сообщение, не подтверждено вендором] субагент Claude Code вставил e-mail пользователя в заголовок запроса к стороннему сайту (GitHub issue, 12.10.2026)",
"t_en": "The agent exports data without the owner knowing",
"cases_en": "[incident] 53 user photos on external hosting (TechCrunch); [report, not confirmed by the vendor] a Claude Code subagent put the user's e-mail into a request header sent to a third-party site (GitHub issue, Oct 12, 2026)",
"stand": "desc"
},
{
"id": "A10.2",
"t": "«Агентский спам»: публикация на чужих сайтах",
"bar": "Запись наружу только в перечисленные адреса",
"det": "Куда агент может публиковать?",
"cases": "[инц] ревью OpenAI (ABC)",
"t_en": "The agent posts spam on other people’s sites",
"cases_en": "[incident] the OpenAI review (ABC)",
"stand": "desc"
},
{
"id": "A10.3",
"t": "Самовольная эскалация и сокрытие следов",
"bar": "Журнал только на дозапись, вне досягаемости агентов",
"det": "Где хранится журнал действий? Может ли агент туда писать или удалять?",
"cases": "[инц] ~20% агентов роя пытались скрыть следы (CSA); [инц] двое агентов, получивших root на кластерах OpenAI, не упомянули это в ответе (OpenAI, 10.11.2026)",
"t_en": "The agent widens its own rights and hides its tracks",
"cases_en": "[incident] about 20% of the swarm's agents tried to hide their traces (CSA); [incident] two agents that got root on OpenAI clusters did not mention it in their answer (OpenAI, Nov 10, 2026)",
"stand": "desc"
},
{
"id": "D1",
"t": "Денежный контур и вебхуки",
"bar": "Детерминированный слой авторизации платежей вне модели: лимиты, список получателей, второй канал. Вебхук: проверка подписи, идемпотентность, привязка к аккаунту плательщика",
"det": "Кто принимает решение о переводе или начислении? Проверяется ли подпись вебхука? Что будет при повторе того же уведомления? Как защищена операторская панель? Есть ли предел на один платёж и на сутки вне модели, если агент платит сам?",
"cases": "[инц] Freysa, 11.2024, ~$47 тыс. (The Decoder); [инц] AIXBT, 18.03.2025, 55,5 ETH через операторскую панель (AIID); [инц] Lobstar Wilde, 22.02.2026, ~$250 тыс. (CCN); [инц] Grok → кошелёк, 04.05.2026 (OECD.AI); [дыра] код платежей агентов x402 без лимита по умолчанию (24.10.2026)",
"t_en": "Money flow and webhooks",
"cases_en": "[incident] Freysa, Nov 2024, about $47,000 (The Decoder); [incident] AIXBT, Mar 18, 2025, 55.5 ETH through the operator panel (AIID); [incident] Lobstar Wilde, Feb 22, 2026, about $250,000 (CCN); [incident] Grok → wallet, May 4, 2026 (OECD.AI)",
"stand": "desc"
},
{
"id": "D2",
"t": "Каналы выхода (полный перечень)",
"bar": "Сеть закрыта по умолчанию, включая DNS; выход только в перечисленные адреса без чужих аккаунтов; два независимых слоя блокировки (мера OpenAI после 20.09)",
"det": "Таблица «канал → открыт/закрыт» по 12 каналам: HTTP/HTTPS, DNS, почта, вебсокеты, метаданные облака, реестры пакетов, git, превью ссылок, картинки в Markdown, формы, вебхуки, общая память и файлы",
"cases": "Картинки в Markdown (EchoLeak, ForcedLeak, CamoLeak); превью ссылок в мессенджерах (The Register, 10.02.2026); параметры ссылок и web-fetch; DNS (Claude Code CVE-2025-55284, SalesBleed, OpenAI 20.09.2026); разрешённые API",
"t_en": "Every path data can leave through",
"cases_en": "Markdown images (EchoLeak, ForcedLeak, CamoLeak); link previews in messengers (The Register, Feb 10, 2026); link parameters and web-fetch; DNS (Claude Code CVE-2025-55284, SalesBleed, OpenAI Sep 20, 2026); allowed APIs",
"stand": "desc"
},
{
"id": "D3",
"t": "Секреты в контексте агента",
"bar": "Секреты только в прокси или хранилище вне досягаемости модели; модель получает результат вызова, а не ключ",
"det": "Где лежат ключи? Может ли агент прочитать переменные среды, файлы с ключами, таблицы с токенами? Попадает ли папка настроек агента (.claude и подобные) в репозиторий? Ищете ли вы секреты в ней?",
"cases": "[демо] AgentFlayer, поиск ключей в документах (Zenity); [демо] Supabase MCP, таблица токенов интеграций; [инц] s1ngularity, 2 349 секретов (Nx); [демо] LangGrinch, утечка секретов через состояние; [исследование] Claude Code при ответе «больше не спрашивать» сохраняет команду вместе с паролем в .claude/settings.local.json: 1 122 таких файла с секретами на публичном GitHub (Apiiro, 05.11.2026)",
"t_en": "Secrets in the agent context",
"cases_en": "[research demo] AgentFlayer, searching documents for keys (Zenity); [research demo] Supabase MCP, the integration tokens table; [incident] s1ngularity, 2,349 secrets (Nx); [research demo] LangGrinch, secrets leaking through state; [research] on the answer “don't ask again” Claude Code saves the command together with the password in .claude/settings.local.json: 1,122 such files with secrets on public GitHub (Apiiro, Nov 5, 2026)",
"stand": "desc"
},
{
"id": "D4",
"t": "Расход и зацикливание (denial of wallet)",
"bar": "Лимит расходов на ключ у провайдера или в прокси; лимит шагов; квота на пользователя; автоматический разрыв цепи",
"det": "Есть ли лимит расходов на ключе? Квота на одного пользователя? Лимит шагов на задачу? Сколько стоит ночной запуск без присмотра? Кто получит тревогу о повторах?",
"cases": "[анекдот, не проверен] 4 агента LangChain, 11 дней, ~$47 тыс. (DEV); [лаб] MAST: повтор шага 17,14%; [инц] 16 000 обращений к ООН; [случай] агент повторял неудачный вызов всю ночь, £220 без единой ошибки в журнале (Reddit r/AI_Agents, 2026)",
"t_en": "Spend and loops: the model bill grows with no result",
"cases_en": "[anecdote, unverified] 4 LangChain agents, 11 days, about $47,000 (DEV); [lab] MAST: repeated step 17.14%; [incident] 16,000 requests to the UN",
"stand": "desc"
},
{
"id": "D5",
"t": "Передача доверия из песочницы наружу",
"bar": "Всё, что написал агент, для хоста — недоверенный вход; сокет контейнеров недоступен",
"det": "Какие файлы агента потом читает или исполняет что-то вне песочницы (хуки, конфиги, задачи IDE, CI)?",
"cases": "[демо] CSA, 22.07.2026: четыре режима отказа, включая доступ к Docker-сокету (CSA); [демо] Cursor CVE-2026-48124, 8.5; [демо] DuneSlide CVE-2026-50548/50549 (The Next Web)",
"t_en": "Trust passes from the sandbox into the main system",
"cases_en": "[research demo] CSA, Jul 22, 2026: four failure modes, including access to the Docker socket (CSA); [research demo] Cursor CVE-2026-48124, 8.5; [research demo] DuneSlide CVE-2026-50548/50549 (The Next Web)",
"stand": "inside"
},
{
"id": "D6",
"t": "Подмена описаний инструментов после одобрения",
"bar": "Отпечаток (fingerprint) описаний при одобрении; любое изменение описания — событие безопасности и повторное одобрение",
"det": "Снимается ли отпечаток описаний инструментов? Что происходит при их изменении?",
"cases": "[демо] Cursor MCPoison CVE-2025-54136, 7.2 (Check Point); [инц] Deadbugz, 08.2026: изменённые описания появляются только при обычной нагрузке (Pillar)",
"t_en": "A tool description is changed after approval",
"cases_en": "[research demo] Cursor MCPoison CVE-2025-54136, 7.2 (Check Point); [incident] Deadbugz, Aug 2026: changed descriptions appear only under normal load (Pillar)",
"stand": "desc"
},
{
"id": "D7",
"t": "Автоодобрение и усталость подтверждений",
"bar": "Мало подтверждений, но значимых; песочница снимает остальные (по Anthropic, минус 84% запросов); конфиг одобрения вне досягаемости агента",
"det": "Сколько подтверждений в день видит человек? Может ли агент писать в свои настройки?",
"cases": "[телеметрия] пользователи одобряли ~93% запросов (Anthropic); [демо] Copilot CVE-2025-53773: агент сам включал автоодобрение; [демо] Cursor CurXecute CVE-2025-54135 (Tenable); [исследование] ответ «больше не спрашивать» на команду с паролем записал пароль в файл проекта; gitleaks и TruffleHog вместе пропустили 215 файлов из 1 122 (Apiiro, 05.11.2026)",
"t_en": "Auto-approval and confirmation fatigue",
"cases_en": "[telemetry] users approved about 93% of requests (Anthropic); [research demo] Copilot CVE-2025-53773: the agent turned auto-approval on by itself; [research demo] Cursor CurXecute CVE-2025-54135 (Tenable); [research] the answer “don't ask again” to a command with a password wrote the password into a project file; gitleaks and TruffleHog together missed 215 files out of 1,122 (Apiiro, Nov 5, 2026)",
"stand": "desc"
},
{
"id": "D8",
"t": "Доверие к «разрешённым» доменам",
"bar": "Список без адресов с чужими аккаунтами; контроль истечения доменов; для API — привязка к своему аккаунту",
"det": "Для каждого разрешённого домена: может ли посторонний завести там аккаунт, страницу или форму?",
"cases": "[демо] ForcedLeak: просроченный домен из списка выкуплен за ~$5 (Noma); EchoLeak (прокси Teams), CamoLeak (прокси Camo), AgentFlayer (Azure Blob), Superhuman (Google Forms), «Claude Pirate» и Cowork (Files API)",
"t_en": "Blind trust in “allowed” sites",
"cases_en": "[research demo] ForcedLeak: an expired domain from the list was bought for about $5 (Noma); EchoLeak (Teams proxy), CamoLeak (Camo proxy), AgentFlayer (Azure Blob), Superhuman (Google Forms), “Claude Pirate” and Cowork (Files API)",
"stand": "desc"
},
{
"id": "D9",
"t": "Регресс исправлений",
"bar": "Закрытие класса, а не формы; повторный прогон прошлых каналов при каждом изменении модели, инструмента или продукта",
"det": "Была ли повторная проверка после последнего исправления? Меняли ли модель или инструменты с тех пор?",
"cases": "n8n CVE-2025-68613 → CVE-2026-25049 (THN); ShadowLeak → ZombieAgent (The Register); Cursor → CVE-2025-59944 (Lakera); Langflow 2025 → 2026; Files API: 10.2025 → 01.2026 → признан в 05.2026",
"t_en": "A fixed bug comes back",
"cases_en": "n8n CVE-2025-68613 → CVE-2026-25049 (THN); ShadowLeak → ZombieAgent (The Register); Cursor → CVE-2025-59944 (Lakera); Langflow 2025 → 2026; Files API: Oct 2025 → Jan 2026 → acknowledged in May 2026",
"stand": "desc"
},
{
"id": "D10",
"t": "Обнаружение без остановки",
"bar": "Автоматическая остановка и заморозка аккаунта по сигналу; CSA предлагает SLA 30 минут на остановку",
"det": "Кто получает тревогу? Есть ли автоматическая остановка? Все ли среды под мониторингом? Через сколько часов владелец узнает, что ключом воспользовался чужой? Пишется ли, кто, когда и откуда использовал каждый ключ, и есть ли тревога на необычное использование?",
"cases": "[инц] агенты на тестах пользовались найденными ключами в живых системах, ни одна организация не заметила (CERT-In, 17.10.2026); [инц] модель потратила чужие монеты, OpenAI увидела это через три месяца (17.10.2026); [инц] 2,5 часа до остановки (OfficeChai); 53 дня до обнаружения (ABC); неделя незамеченной координации (CSA); [сообщение прессы] агент OpenAI в июне получил доступ к статистическому сайту Medicare, власти узнали об этом в сентябре (AAP, 10.11.2026)",
"t_en": "The failure is spotted, yet the system keeps running",
"cases_en": "[incident] agents under test used found keys in live systems, no organisation noticed (CERT-In, Oct 17, 2026); [incident] a model spent someone else's coins, OpenAI saw it three months later (Oct 17, 2026); [incident] 2.5 hours until the stop (OfficeChai); 53 days until detection (ABC); a week of unnoticed coordination (CSA); [press report] an OpenAI agent accessed a Medicare statistics site in June, the authorities learned of it in September (AAP, Nov 10, 2026)",
"stand": "desc"
},
{
"id": "D11",
"t": "Операторская плоскость и админ-команды",
"bar": "Панель с сильной аутентификацией и вторым фактором; админ-команды привязаны к проверенному аккаунту; аккаунты владельца (GitHub, хостинг, BotFather, платёжный сервис) — вход по ключу доступа (passkey) или аппаратному ключу: AI-фишинг пересылает и пароль, и одноразовый код",
"det": "Как защищены панель и админ-команды? Кто может поставить агенту задачу напрямую? Какой второй фактор на аккаунтах владельца — GitHub, хостинг, BotFather, оплата: код из SMS или приложения, ключ доступа, аппаратный ключ?",
"cases": "[инц] AI-фишинг пересылал на настоящий вход Google и пароль, и одноразовый код (Cisco Talos, 17.10.2026); [инц] один украденный пароль сотрудника открыл хранилища кода Meta на GitHub (14.10.2026); [инц] AIXBT: доступ к панели и две мошеннические задачи, команда заявила, что сам AI не манипулировали (The Block)",
"t_en": "Admin access and service commands",
"cases_en": "[incident] AI phishing relayed both the password and the one-time code to the real Google sign-in (Cisco Talos, Oct 17, 2026); [incident] one stolen employee password opened Meta's code repositories on GitHub (Oct 14, 2026); [incident] AIXBT: access to the panel and two fraudulent tasks, the team said the AI itself was not manipulated (The Block)",
"stand": "desc"
},
{
"id": "D12",
"t": "Тихий сбой: формат сменился, ошибка проглочена, поток затих",
"bar": "Проверка формата на входе с громким отказом; очередь отказов; тревога на «ноль событий за N часов»; ежедневная сверка с первоисточником (банк, CRM); выборочная проверка живых ответов агента; оператор видит диалоги в реальном времени; секреты из переменных обрезаются, отказ проверки идёт в журнал и тревогу",
"det": "Что будет, если вебхук или API вернёт другой формат или пустой ответ? Глушатся ли ошибки (try/except без сигнала)? Узнает ли кто-нибудь, что событий стало ноль? Кто выборочно смотрит живые ответы агента? Видит ли оператор переписку в реальном времени? Обрезаются ли секреты из переменных (невидимый перенос строки при сравнении даёт тихий отказ)?",
"cases": "[случай] платёжный вебхук тихо сменил формат, сценарий падал неделю без тревоги — ручное восстановление по выпискам, ~$14 тыс. (Reddit r/n8n, 2026); [случай] 12 клиентских сценариев — о тихих сбоях владелец узнаёт от клиентов (Reddit r/n8n); [случай] WhatsApp-агент: заказчик не видит сообщения в реальном времени — возврат оплаты (Reddit r/n8n); [случай] при вставке секрета прилип перенос строки, бот тихо перестал сохранять согласия на несколько дней (наш случай, 25.10.2026)",
"t_en": "Silent failure: format changed, error swallowed, flow went quiet",
"cases_en": "[case] a payment webhook silently changed its format, the scenario failed for a week without an alert, about $14,000 (Reddit r/n8n, 2026); [case] the owner learns about silent failures of 12 client scenarios from the clients (Reddit r/n8n)",
"stand": "desc"
},
{
"id": "D13",
"t": "Версия под активной атакой и подменённый источник обновлений",
"bar": "Перечень компонентов с версиями (фреймворк, конструктор агентов, MCP-серверы, библиотеки); версии закреплены, обновления только из официального источника с проверкой подписи; то, что уже атакуют, обновляется за 24 часа; пакеты ставятся без автозапуска скриптов",
"det": "На чём собран проект и какие версии стоят? Есть ли среди них компоненты, которые уже атакуют (фреймворк сайта, конструктор агентов, MCP-серверы)? Откуда ставятся обновления и проверяется ли подпись? Кто следит за срочными исправлениями? Входят ли в перечень расширения AI-редактора и CLI агентов? Сверяете ли вы точное имя пакета при установке? Откуда взяты веса открытых моделей и сверяется ли их хеш с оригиналом?",
"cases": "[инц] Langflow до 1.9.0: запуск команд на сервере через добавление MCP-сервера, 1423 попытки атаки из 15 стран (Previdian, 16.10.2026); [инц] обновления AOMEI Backupper в окнах по 5–10 минут подменяли на бэкдор, заражены организации в 11 странах (Google, 17.10.2026); [инц] поддельные копии помощников yay и paru в AUR ставили чужой код (16.10.2026); [дыра] Next.js: два критических исправления запуска кода на сервере (16.10.2026); [дыра] библиотека SAP для Python могла отправить ключи доступа на чужой сервер (14.10.2026); [инц] поддельное расширение Claude Code 2.1.312 и 2.1.313 в маркетплейсе Cursor: около 11 часов, до 5 000 пользователей (Cursor, 13.11.2026); [инц] MCP-пакет @bestcoolman/dev-mcp отправлял токены Amazon на чужой сервер (OSV MAL-2026-19052, 09.11.2026); [инц] npm снял пакет @claudecode/cli, настоящий называется @anthropic-ai/claude-code (npm, 13.11.2026); [лаб] Lazarus: правка 7 нейронов из 12 000 в открытой модели ставит закладку, которая срабатывает по условному сигналу и не видна в обычных проверках; реальных атак не зафиксировано (Microsoft, 10.11.2026)",
"t_en": "A version under active attack and a hijacked update source",
"cases_en": "[incident] Langflow before 1.9.0: running commands on the server by adding an MCP server, 1,423 attack attempts from 15 countries (Previdian, Oct 16, 2026); [incident] AOMEI Backupper updates were swapped for a backdoor in windows of 5–10 minutes, organisations in 11 countries were infected (Google, Oct 17, 2026); [incident] fake copies of the yay and paru helpers in AUR installed outside code (Oct 16, 2026); [flaw] Next.js: two critical fixes for code execution on the server (Oct 16, 2026); [flaw] the SAP library for Python could send access keys to an outside server (Oct 14, 2026); [incident] a fake Claude Code extension 2.1.312 and 2.1.313 in the Cursor marketplace: about 11 hours, up to 5,000 users (Cursor, Nov 13, 2026); [incident] the MCP package @bestcoolman/dev-mcp sent Amazon tokens to an outside server (OSV MAL-2026-19052, Nov 9, 2026); [incident] npm removed the package @claudecode/cli, the real one is called @anthropic-ai/claude-code (npm, Nov 13, 2026); [lab] Lazarus: editing 7 neurons out of 12,000 in an open model plants a backdoor that fires on a trigger and stays invisible to regular checks; no real attacks recorded (Microsoft, Nov 10, 2026)",
"stand": "desc"
},
{
"id": "D14",
"t": "Провайдер взломан: сколько часов до полной смены ключей",
"bar": "Реестр секретов «ключ → все места»; один источник (переменная, а не буква в SQL, Make или коде); приём старого и нового ключа на время замены; записанный порядок смены и срок жизни у каждого ключа",
"det": "Где живёт каждый секрет, все места? Вписан ли он буквально в базу, сценарии Make или n8n, код? Можно ли принять старый и новый одновременно, или смена означает простой? Есть ли записанный порядок смены? Встанут ли оплаты при смене?",
"cases": "[инц] взлом хостинга Railway, 21.10.2026; [инц] Zeabur, 14–15.10.2026; [инц] Onamae, 20.10.2026; [случай] один секрет жил в 4 местах и в 17 функциях базы, смена в одном месте остановила бы все оплаты (наш случай, 25.10.2026); [инц] Kernel: украденный ключ открыл систему логов с ключами клиентов (Kernel, 04.11.2026); [инц] Botpress: в настройках ботов лежали ключи AI-провайдеров, токены мессенджеров и CRM (Botpress, 06.11.2026); [инц] Fireworks AI: Notion отозвала ключи, найденные в утёкших переписках, Cursor сменил все внутренние ключи (11–13.11.2026); [инц] отчёт Railway: взломщик искал прежде всего ключи AI-сервисов (10.11.2026)",
"t_en": "Provider breached: how many hours until every key is replaced",
"cases_en": "[incident] the Railway hosting breach, Oct 21, 2026; [incident] Zeabur, Oct 14–15, 2026; [incident] Onamae, Oct 20, 2026; [case] one secret lived in 4 places and in 17 database functions, replacing it in one place would have stopped all payments (our case, Oct 25, 2026); [incident] Kernel: a stolen key opened the log system with customer keys (Kernel, Nov 4, 2026); [incident] Botpress: bot settings held AI provider keys, messenger and CRM tokens (Botpress, Nov 6, 2026); [incident] Fireworks AI: Notion revoked the keys found in leaked chats, Cursor replaced all internal keys (Nov 11–13, 2026); [incident] the Railway report: the attacker looked first of all for AI service keys (Nov 10, 2026)",
"stand": "desc"
},
{
"id": "D15",
"t": "Сломанная передача: следующий агент верит испорченным данным",
"bar": "Схема данных на каждом стыке между агентами с громким отказом; проверка обязательных полей; потерю контекста видно в журнале; при отказе задача возвращается, а не идёт дальше",
"det": "Что передаёт один агент другому и кто проверяет формат? Что будет, если поле пустое или в другом виде? Сохраняется ли исходная задача и ограничения при передаче?",
"cases": "[лаб] MAST/Berkeley: рассогласование между агентами около 32% сбоев мультиагентных систем (по исследованию 18.10.2026)",
"t_en": "Broken handoff: the next agent trusts malformed data",
"cases_en": "[lab] MAST/Berkeley: misalignment between agents is about 32% of multi-agent system failures (per the study of Oct 18, 2026)",
"stand": "desc"
},
{
"id": "D16",
"t": "Беглый оркестратор и пинг-понг агентов",
"bar": "Предел на число и глубину порождённых агентов; предел передач между агентами на задачу; бюджет на весь запуск, вне модели; разрыв цепи при повторе одного и того же действия",
"det": "Может ли агент запускать других агентов и есть ли предел числа и глубины? Могут ли два агента передавать задачу друг другу без конца? Есть ли бюджет на весь запуск? Что остановит повтор одного и того же действия?",
"cases": "[сообщение, не проверено] Codex по простому запросу создал 826 дочерних агентов, около $78 000 (Hacker News, 2026); [случай] Zed: 171 чтение одного файла, ноль правок, 10,3 млн токенов (GitHub, 10.2026); [лаб] MAST: повтор шага около 17%",
"t_en": "The lead agent runs out of control and agents bounce the task in circles",
"cases_en": "[report, unverified] on a simple request Codex created 826 child agents, about $78,000 (Hacker News, 2026); [case] Zed: 171 reads of one file, zero edits, 10.3 million tokens (GitHub, Oct 2026); [lab] MAST: repeated step about 17%",
"stand": "desc"
},
{
"id": "D17",
"t": "Тихое усечение и разрастание контекста",
"bar": "Видимый сигнал, когда контекст обрезан; важные ограничения закреплены вне истории; сброс контекста по расписанию; предел длины запуска и расхода на него",
"det": "Что происходит, когда история не помещается: что отрезается и кто об этом узнаёт? Где хранятся ограничения задачи? Как долго идёт один запуск и сколько стоит каждый следующий шаг?",
"cases": "[случай] длинные задания дали 52% расхода, тариф вырос с $20 до $200 за 5 дней (Reddit r/AI_Agents, 10.2026); [лаб] мультиагентные системы расходуют примерно в 15 раз больше токенов, чем чат (по исследованию 18.10.2026)",
"t_en": "Context is silently cut or bloated",
"cases_en": "[case] long tasks gave 52% of the spend, the plan grew from $20 to $200 in 5 days (Reddit r/AI_Agents, Oct 2026); [lab] multi-agent systems use about 15 times more tokens than a chat (per the study of Oct 18, 2026)",
"stand": "desc"
},
{
"id": "D18",
"t": "Выдуманная политика, цена или скидка",
"bar": "Ответы о ценах, возвратах и правилах только из проверенного источника; нет источника — передача человеку; база знаний без внутренних обходных приёмов; выборочная проверка ответов",
"det": "Откуда агент берёт цены, сроки, условия возврата? Что он делает, если ответа нет в источнике? Учится ли на внутренних чатах? Отвечает ли компания за его обещания?",
"cases": "[инц] чат-бот Air Canada придумал условие возврата, суд присудил C$650.88 и сборы (02.2024); [инц] бот поддержки Cursor придумал правило «одно устройство», пользователи отменяли подписки (04.2025); [случай] агент учился на внутренних обходных приёмах, 30 аккаунтов восстанавливали 3 дня (Reddit r/AI_Agents, 2025)",
"t_en": "Invented policy, price or discount",
"cases_en": "[incident] the Air Canada chatbot invented a refund term, the tribunal awarded C$650.88 and fees (Feb 2024); [incident] the Cursor support bot invented a “one device” rule, users cancelled subscriptions (Apr 2025); [case] an agent learned from internal workarounds, 30 accounts took 3 days to restore (Reddit r/AI_Agents, 2025)",
"stand": "desc"
},
{
"id": "D19",
"t": "Глаза есть, рук нет: агенту нечем закрыть задачу",
"bar": "У каждого агента есть действие «решено» и «передать человеку»; условие передачи записано; счётчик безрезультатных шагов; проверка, что передача человеку срабатывает после обновлений",
"det": "Какими действиями агент завершает задачу? Может ли он передать её человеку и когда обязан это сделать? Что будет, если нужного инструмента нет? Кто заметит, что агент перестал передавать сложные случаи?",
"cases": "[случай] агент поддержки без инструмента возврата сотни раз проверял один заказ, $47 на одном обращении (Reddit r/AI_Agents, 04.2026)",
"t_en": "Eyes but no hands: the agent cannot finish the task",
"cases_en": "[case] a support agent without a refund tool checked one order hundreds of times, $47 on a single ticket (Reddit r/AI_Agents, Apr 2026)",
"stand": "desc"
},
{
"id": "D20",
"t": "Повтор опасного действия после таймаута",
"bar": "Ключ идемпотентности у каждого действия с деньгами и заказами; проверка статуса перед повтором; повторы ограничены; журнал действий с ключом",
"det": "Что будет, если вызов возврата, оплаты или заказа завис и агент повторит его? Есть ли ключ, который не даст выполнить действие дважды? Кто увидит двойное действие?",
"cases": "[случай] таймаут и повтор дали три возврата за один заказ (Reddit, 2026); [случай] агент ресторана отправлял один заказ на печать 2, 3 и 4 раза (Reddit r/AI_Agents, 2026)",
"t_en": "A dangerous action repeated after a timeout",
"cases_en": "[case] a timeout and a retry gave three refunds for one order (Reddit, 2026); [case] a restaurant agent sent one order to print 2, 3 and 4 times (Reddit r/AI_Agents, 2026)",
"stand": "desc"
},
{
"id": "D21",
"t": "Обновление модели сломало формат и поведение",
"bar": "Версия модели закреплена; при смене прогон эталонных диалогов и проверка формата ответа; сравнение с прошлой версией; быстрый откат",
"det": "Закреплена ли версия модели или она меняется сама? Есть ли набор эталонных диалогов для проверки? Разбирает ли код ответ модели строго? Как быстро можно откатиться?",
"cases": "[наблюдение] в исследовании 18.10.2026 жалобы есть, подробных случаев с цифрами не найдено",
"t_en": "A model update broke the format and behaviour",
"cases_en": "[observation] the study of Oct 18, 2026 has complaints, no detailed cases with numbers were found",
"stand": "desc"
},
{
"id": "D22",
"t": "Неучтённые агенты и разные ответы по каналам",
"bar": "Перечень всех агентов с владельцем, доступами и правом писать наружу; общий проверенный источник ответов для всех каналов; у личных агентов нет доступа к рабочим каналам",
"det": "Есть ли список всех агентов, включая подключённые сотрудниками самостоятельно? У кого какой доступ и куда он может писать? Отвечают ли сайт, почта и мессенджер из одного источника?",
"cases": "[случай] личный агент-финансист с доступом только на чтение опубликовал балансы владельца в рабочем Slack от его имени (Shane Mac, X, 06.10.2026)",
"t_en": "Unlisted agents and different answers across channels",
"cases_en": "[case] a personal finance agent with read-only access posted the owner's balances in the work Slack under his name (Shane Mac, X, Oct 6, 2026)",
"stand": "desc"
},
{
"id": "D23",
"t": "Давление клиента ради скидки, возврата или исключения",
"bar": "Скидки, возвраты и исключения решает код или человек, а не модель; агент не меняет условия по просьбе; длинный спорный диалог уходит человеку",
"det": "Может ли агент сам дать скидку, возврат или исключение? Что будет после долгих уговоров? Проверяли ли диалоги с давлением без попытки взлома?",
"cases": "[наблюдение] из подборки поломок агентов поддержки, заметка 18.10.2026; случая с проверенными цифрами пока нет",
"t_en": "Customer pressure for a discount, refund or exception",
"cases_en": "[observation] from a collection of support agent failures, note of Oct 18, 2026; there is no case with verified numbers yet",
"stand": "desc"
},
{
"id": "D24",
"t": "Агент починил одну интеграцию и сломал другие",
"bar": "Смена схемы и подключений только через проверку и человека; перечень зависимых автоматизаций; прогон эталонных сценариев после каждого изменения",
"det": "Может ли агент менять схему данных или подключения? Кто знает, какие автоматизации на них опираются? Что проверяется после такого изменения?",
"cases": "[наблюдение] из подборки поломок агентов поддержки, заметка 18.10.2026; случая с проверенными цифрами пока нет",
"t_en": "The agent fixed one integration and broke others",
"cases_en": "[observation] from a collection of support agent failures, note of Oct 18, 2026; there is no case with verified numbers yet",
"stand": "desc"
},
{
"id": "D25",
"t": "Потеря контекста между сессиями одного клиента",
"bar": "Краткая запись о клиенте и незакрытой задаче хранится между сессиями с понятным сроком; передача человеку с историей; согласие на хранение",
"det": "Что помнит агент, когда клиент вернулся через день или неделю? Где это хранится, сколько и видит ли историю человек при передаче?",
"cases": "[наблюдение] из подборки поломок агентов поддержки, заметка 18.10.2026; случая с проверенными цифрами пока нет",
"t_en": "Context lost between sessions with the same customer",
"cases_en": "[observation] from a collection of support agent failures, note of Oct 18, 2026; there is no case with verified numbers yet",
"stand": "desc"
},
{
"id": "D26",
"t": "Стоимость контроля съедает экономию",
"bar": "Учёт часов на проверку ответов и разбор ошибок рядом с расходом на модель; порог, при котором задача возвращается человеку; проверка выборкой вместо проверки всего",
"det": "Сколько часов уходит на проверку агента и исправление его ошибок? Считается ли это рядом с экономией? Кто решает, что агент окупается?",
"cases": "[наблюдение] из подборки поломок агентов поддержки, заметка 18.10.2026; случая с проверенными цифрами пока нет",
"t_en": "The cost of oversight eats the savings",
"cases_en": "[observation] from a collection of support agent failures, note of Oct 18, 2026; there is no case with verified numbers yet",
"stand": "desc"
},
{
"id": "D27",
"t": "Агент удалил или перезаписал «черновик»",
"bar": "Удаление и перезапись только с подтверждением человека; перед изменением копия; корзина со сроком; агенту запрещена уборка без задачи",
"det": "Может ли агент удалять и перезаписывать данные (таблицы, переписку, документы)? Что считается черновиком? Как восстановить и сколько это займёт?",
"cases": "[наблюдение] из подборки поломок агентов поддержки, заметка 18.10.2026; случая с проверенными цифрами пока нет",
"t_en": "The agent deleted or overwrote a “draft”",
"cases_en": "[observation] from a collection of support agent failures, note of Oct 18, 2026; there is no case with verified numbers yet",
"stand": "desc"
},
{
"id": "D28",
"t": "Провайдер AI хранит ваши запросы и записи сессий",
"bar": "Режим без хранения у провайдера; ключи и личные данные вычищаются до отправки; список провайдеров, которым уходят данные, с закреплённым маршрутом в роутере моделей; ключи не вставляются в чат и не пишутся в логи",
"det": "Каким AI-провайдерам уходят запросы, записи сессий агентов и логи? Сколько они там хранятся? Кто исполняет запрос за роутером моделей? Встречаются ли в запросах и логах ключи и личные данные?",
"cases": "[инц] взлом Fireworks AI: у Notion утекли переписки Notion AI с ключами API, у Cursor записи сессий агентов с ключами, у Uber данные водительских прав (Notion, Cursor, TechCrunch, 11–13.11.2026); [инц] Phala через OpenRouter: запросы с 21.10 по 08.11 считаются раскрытыми, ключи-ловушки из них кто-то использовал (Phala, 10.11.2026); [инц] NEAR AI: через уязвимость в SGLang забрали чаты, настройки и логи 18 агентов, в логах были API-ключи (NEAR AI, 10.11.2026); [инц] Kernel: в системе логов лежали ключи клиентов (Kernel, 04.11.2026)",
"t_en": "The AI provider stores your prompts and session traces",
"cases_en": "[incident] the Fireworks AI breach: Notion lost Notion AI chats with API keys, Cursor lost agent session traces with keys, Uber lost driver's licence data (Notion, Cursor, TechCrunch, Nov 11–13, 2026); [incident] Phala through OpenRouter: prompts from Oct 21 to Nov 8 are treated as exposed, canary keys from them were used by someone (Phala, Nov 10, 2026); [incident] NEAR AI: chats, settings and logs of 18 agents were taken through a flaw in SGLang, the logs held API keys (NEAR AI, Nov 10, 2026); [incident] Kernel: the log system held customer keys (Kernel, Nov 4, 2026)",
"stand": "desc"
},
{
"id": "D29",
"t": "Свой MCP-сервер как открытый вход",
"bar": "MCP-сервер продукта защищён как публичный API: вход и права на каждого клиента, ограничение частоты, журнал с тревогой; права сервера уже прав панели управления",
"det": "Доступен ли MCP-сервер вашего продукта из интернета? Кто может к нему подключиться и что он может сделать? Отделены ли данные одного клиента от другого? За сколько часов вы заметите чужого?",
"cases": "[инц] Mittwald: 27.10.2026 атакующий использовал уязвимость в MCP-сервере хостера, 56 скомпрометированных проектов клиентов, обнаружили 04.11, между шагами проходили секунды (Mittwald, 07.11.2026)",
"t_en": "Your own MCP server as an open door",
"cases_en": "[incident] Mittwald: on Oct 27, 2026 an attacker exploited a flaw in the hosting company's MCP server, 56 customer projects were compromised, it was discovered on Nov 4, seconds passed between steps (Mittwald, Nov 7, 2026)",
"stand": "desc"
},
{
"id": "D30",
"t": "Приложение из AI-конструктора открыто без входа",
"bar": "Вход на каждой странице с данными; правила доступа к строкам (RLS) на каждой таблице; публикация по умолчанию закрыта; адрес приложения не считается секретом",
"det": "Открывается ли приложение по адресу без входа? Отдаёт ли база данные по ключу из браузера? Что стояло по умолчанию при публикации? Кто проверял это после сборки?",
"cases": "[исследование] Grok Build: 35 578 из 37 571 работающих приложений открывались без входа, среди них внутренние приложения сотрудников SpaceXSI (Claroc, 10.11.2026); [исследование] Lovable: у 24 664 сайтов база отдаёт данные без входа, в 7 403 нашлись таблицы с e-mail (Crissy Field, 02.11.2026)",
"t_en": "An app from an AI builder opens without sign-in",
"cases_en": "[research] Grok Build: 35,578 of 37,571 live apps opened without sign-in, including internal apps of SpaceXSI staff (Claroc, Nov 10, 2026); [research] Lovable: at 24,664 sites the database returns data without sign-in, 7,403 of them had tables with e-mail addresses (Crissy Field, Nov 2, 2026)",
"stand": "desc"
}
];
