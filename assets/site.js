(() => {
  const STORAGE_KEY = 'rezo-site-language';
  const body = document.body;
  const page = body.dataset.page || 'index';
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const zh = {
    common: {
      nav: {
        home: '首页',
        product: '产品',
        support: '支持',
        privacy: '隐私'
      },
      lang: {
        label: '语言',
        english: 'English',
        chinese: '中文'
      },
      brand: {
        name: '知音纯音乐',
        subtitle: '高品质陪伴型纯音乐，做你的知音'
      },
      footer: {
        cta: '需要帮助或隐私说明？支持和隐私页面都在这里。',
        rights: '© 知音纯音乐'
      }
    },
    pages: {
      index: {
        meta: {
          title: '知音纯音乐',
          description: '知音纯音乐官网首页，包含视频式主视觉、可试听示例和场景介绍。'
        },
        hero: {
          eyebrow: '知音纯音乐',
          title: '高品质陪伴，做你的知音。',
          body: '精选纯音乐歌单，陪伴你的专注、休息与日常生活。',
          primary: '开启试听',
          secondary: '打开产品页',
          hint: '向下滚动，先听听看。',
          scroll: '滚动'
        },
        demos: {
          eyebrow: '试听',
          title: '自然地陪在你的身边。',
          body: '这些纯音乐会让你越听越舒服、越听越安心。先通过四首试听，开启这份陪伴。',
          note: '一次只播放一首，保持简洁。',
          track1: {
            title: '咖啡店',
            body: '温暖、靠近，适合一直放着听。'
          },
          track2: {
            title: '指弹吉他',
            body: '轻柔拨弦，适合安静专注。'
          },
          track3: {
            title: '弦乐四重奏',
            body: '更开阔，也更柔和。'
          },
          track4: {
            title: '学习节拍',
            body: '节奏轻一点，步伐就更稳一点。'
          }
        },
        mission: {
          eyebrow: '产品使命',
          title: '让音乐支持你当下的状态。',
          body: '知音纯音乐更在意如何支持你当下的状态，而不是不断分散你的注意力。',
          tag1: '专注',
          tag2: '休息',
          tag3: '日常'
        },
        fit: {
          eyebrow: '适用场景',
          title: '适合长久陪伴的音乐。',
          body: '从清晨到夜晚，在生活中的许多安静时刻里，自然地陪在你的身边。',
          point1: {
            title: '学习与阅读',
            body: '在翻页或做题时保持注意力稳定。'
          },
          point2: {
            title: '工作与创作',
            body: '让环境安静一点，好专心做深度工作。'
          },
          point3: {
            title: '休息与睡眠',
            body: '当一天慢下来时，也慢慢跟上。'
          },
          point4: {
            title: '出行与日常',
            body: '生活继续往前时，音乐依然在背景里。'
          }
        },
        scene: {
          kicker: '知音纯音乐',
          title: '纯粹聆听',
          caption: '本地优先，安静而稳定。',
          label: '正在播放',
          nowPlaying: '适合当下的音乐',
          subtitle: '风格、场景、功能，一起就绪。',
          chip1: '风格',
          chip2: '场景',
          chip3: '功能'
        },
        story: {
          eyebrow: '关于应用',
          title: '什么是知音纯音乐',
          body: '知音纯音乐是一款高品质纯音乐应用，汇集多种类型的器乐音乐内容，为用户在不同生活场景中提供稳定、低干扰且富有音乐性的聆听体验。',
          point1: '歌单浏览',
          point2: '中英双语',
          point3: '本地记忆'
        },
        local: {
          eyebrow: '产品使命',
          title: '为什么做它',
          body: '在快节奏的生活中，人们越来越需要能够帮助专注、放松与情绪调节的音乐环境。',
          point1: '匿名进入',
          point2: '不需要登录门槛',
          point3: '隐私先于增长'
        },
        summary: {
          kicker: '概览',
          title: '高品质纯音乐内容库',
          body: '歌单内容覆盖专注、冥想与助眠、运动节奏、自然环境音，以及更多适合长时间聆听的器乐作品。',
          row1Left: '专注',
          row1Right: '学习与工作',
          row2Left: '放松',
          row2Right: '冥想与助眠',
          row3Left: '纯音乐',
          row3Right: '弦乐、钢琴与环境音'
        },
        language: {
          eyebrow: '适用场景',
          title: '它适合哪里',
          body: '在不同的状态与环境中，你都可以找到适合当下的音乐。',
          point1: '学习与阅读',
          point2: '能在阅读或学习时保持注意力稳定。',
          point3: '冥想与放松',
          point4: '支持更长、更安静的专注时段。'
        },
        cta: {
          eyebrow: '准备好了',
          title: '查看产品、支持和隐私。',
          body: '这是一张为 App Store 准备的静态网站，同时也能作为后续市场页的起点。',
          primary: '打开产品页',
          secondary: '联系支持'
        }
      },
      product: {
        meta: {
          title: '产品 · 知音纯音乐',
          description: '看看知音纯音乐如何把歌单浏览、心情选择和播放整合成一个安静的纯音乐体验。'
        },
        hero: {
          eyebrow: '产品',
          title: '高品质纯音乐，始终陪伴在侧。',
          body: '知音纯音乐汇集高品质器乐内容，为学习、工作、休息、运动与日常生活提供稳定且低干扰的聆听体验。',
          primary: '查看支持',
          secondary: '阅读隐私'
        },
        scene: {
          kicker: '知音纯音乐',
          title: '纯粹聆听',
          caption: '陪伴专注、休息与日常之间的每一个时刻。',
          label: '正在播放',
          nowPlaying: '适合当下的音乐',
          subtitle: '风格、场景、功能，一起就绪。',
          chip1: '风格',
          chip2: '场景',
          chip3: '功能'
        },
        browse: {
          eyebrow: '浏览',
          title: '更自然地找到匹配的状态。',
          body: '从风格、场景或功能出发，找到适合当下状态的歌单，开启你的生活节奏。',
          point1: '发现你喜欢的音乐风格',
          point2: '匹配你此刻所在的场景',
          point3: '如果知道名字，搜索也很快'
        },
        mood: {
          eyebrow: '心情',
          title: '从你的感受开始。',
          body: '选择一个最贴近当下的情绪，即可快速匹配音乐；也可以摇一次骰子，收获一点轻松自然的惊喜。',
          point1: '轮盘式选择',
          point2: '每次都会转到不同的心情',
          point3: '心情标签会显示中英文名称'
        },
        player: {
          eyebrow: '播放器',
          title: '稳定且低干扰的播放体验。',
          body: '迷你播放器会一直陪着你，无论在哪个页面，都能获得顺滑、无断点的聆听体验。',
          point1: '迷你播放器常驻',
          point2: '播放队列清晰可见',
          point3: '播放不中断'
        },
        cta: {
          eyebrow: '准备好收藏和下载',
          title: '把喜欢的音乐留在身边。',
          body: '一键收藏，方便随时回来；支持下载后离线收听，在没有网络的时候也能继续播放。',
          cardKicker: '把喜欢的音乐留在身边',
          cardTitle: '收藏之后，更快回到它。',
          cardBody: '收藏常听的歌单，下载之后也能离线继续播放。',
          favoriteTitle: '收藏',
          favoriteBody: '一键回到你喜欢的歌单。',
          downloadTitle: '下载',
          downloadBody: '离线时也能继续播放歌单。'
        }
      },
      support: {
        meta: {
          title: '支持 · 知音纯音乐',
          description: '知音纯音乐的支持页面。先看邮箱，再看技术支持、音乐建议和常见问题。'
        },
        hero: {
          eyebrow: '支持',
          title: '联系知音纯音乐',
          body: '从技术问题、新功能请求，到音乐建议，都可以直接给我们发邮件。',
          note: '反馈 bug 时，请附上设备型号、iOS 版本、应用版本和复现步骤。'
        },
        contact: {
          emailLabel: '联系邮箱'
        },
        tech: {
          eyebrow: '技术支持',
          title: '播放与应用问题',
          body: '如果播放、下载、语言或应用本身出现异常，请把下面的信息发给我们。',
          point1: '播放停止、卡顿，或者无法开始',
          point2: '下载没有完成，或者内容看起来过旧',
          point3: '语言或版面文字显示不对',
          point4: '应用崩溃、卡住，或者回到了错误页面',
          note: '请附上设备型号、iOS 版本、应用版本和复现步骤。'
        },
        music: {
          eyebrow: '音乐建议',
          title: '歌单和选题建议',
          body: '如果你想要某种歌单、心情、场景或器乐方向，也可以直接告诉我们。我们会认真阅读每一条请求，并据此安排后续内容。',
          point1: '工作、学习、休息、睡眠或运动歌单',
          point2: '心情和场景想法',
          point3: '乐器、编曲或节奏偏好',
          point4: '本地化或命名建议'
        },
        faq: {
          eyebrow: '问答',
          title: '常见问题',
          q1: '如何在 iOS App 中切换语言？',
          a1: '在 iPhone 的系统设置中更改语言。知音纯音乐会跟随你设备上的语言。',
          q2: '技术报告要写什么？',
          a2: '请附上设备型号、iOS 版本、应用版本和能复现问题的步骤。',
          q3: '可以用中文提音乐请求吗？',
          a3: '可以，用你更顺手的语言即可。'
        }
      },
      privacy: {
        meta: {
          title: '隐私 · 知音纯音乐',
          description: '知音纯音乐的隐私政策。先看关键事实，再阅读正式条款。'
        },
        hero: {
          eyebrow: '隐私',
          title: '隐私政策与数据处理说明',
          body: '我们致力于保护您的隐私：核心聆听数据默认存储于您的设备本地，且无需注册账号即可使用。',
          primary: '联系支持',
          secondary: '打开产品页',
          note: '最后更新：2026 年 4 月 14 日',
          cardTitle: '安静的政策，安静的产品。',
          cardNote: '最后更新：2026 年 4 月 14 日'
        },
        summary: {
          eyebrow: '核心摘要',
          title: '关键隐私事实',
          body: '我们坚持极简的数据处理原则：核心数据默认留存在用户设备本地，且不涉及任何广告追踪或商业化销售行为。',
          point1: '核心聆听数据默认存储于用户设备本地',
          point2: '现阶段无需创建账户即可直接使用',
          point3: '不涉及任何广告追踪或用户画像构建',
          point4: '绝不向任何第三方出售用户个人信息',
        },
        contact: {
          eyebrow: '联系',
          title: '隐私问题请直接写信。',
          body: '如果你需要帮助理解这份政策或数据处理方式，请直接联系我们。',
          emailLabel: '联系邮箱',
          note: '这是处理隐私和支持问题的统一入口。'
        },
        formal: {
          eyebrow: '正式条款',
          title: '完整隐私政策',
          body: '下面的条款说明当前版本的知音纯音乐如何处理数据。',
          meta: '生效日期：2026 年 4 月 14 日',
          intro: {
            title: '知音纯音乐隐私政策',
            body1: '知音纯音乐（Rezo Music，以下简称“本应用”或“我们”）重视你的隐私。本隐私政策适用于知音纯音乐 iOS App 以及我们运营的相关支持页面。它说明我们会处理哪些信息、如何使用这些信息、何时可能共享这些信息、你的选择，以及如何联系我们。',
            body2: '在当前版本中，你无需创建账号即可开始聆听，本应用也不维护开发者运营的用户账号系统。'
          },
          section1: {
            title: '1. 我们处理的信息类型',
            sub1: {
              title: '1.1 你保存在本地的信息',
              body: '本应用会将你选择保存在设备上的信息留在本地，用来记住你的聆听偏好和本地资料状态。',
              point1: '昵称',
              point2: '你选择的头像图片',
              point3: '收藏的歌单',
              point4: '播放历史',
              point5: '听歌时长及其他本地播放统计',
              point6: '语言、可视化样式、首次引导完成状态等应用偏好'
            },
            sub2: {
              title: '1.2 你通过邮件提供的信息',
              body: '如果你通过邮件联系我们，我们会收到你使用的邮箱地址以及你在邮件中主动提供的信息。',
              point1: '你使用的邮箱地址',
              point2: '你在邮件中主动提供的信息'
            },
            sub3: {
              title: '1.3 我们不会有意收集的信息',
              body: '当前版本不会有意收集通讯录、精确位置、麦克风内容、支付信息、广告标识符或登录凭据。'
            },
            sub4: {
              title: '1.4 支持页面信息',
              body: '支持页面是静态页面，不使用表单或跟踪脚本。'
            },
            sub5: {
              title: '1.5 自动化技术信息',
              body: '当你使用本应用时，我们可能会自动处理有限的技术信息（仅限应用启动事件），以了解应用性能和使用情况。'
            }
          },
          section2: {
            title: '2. 我们如何使用信息',
            point1: '让本应用记住你在设备上的本地偏好和资料状态',
            point2: '按你在 iPhone 上设置的语言展示内容',
            point3: '支持浏览、播放和离线聆听',
            point4: '在设备上保留本地历史和听歌统计',
            point5: '回复支持邮件',
            point6: '运行、维护、改进和保护本应用及相关支持页面',
            point7: '遵守适用法律'
          },
          section3: {
            title: '3. 信息共享',
            intro: '我们不会出售或出租个人信息，也不会把你的本地应用数据用于广告或广告画像。我们只会在以下情况下共享或披露有限信息：',
            sub1: {
              title: '3.1 在你的指示下',
              body: '例如，当你发送支持邮件、使用系统功能，或以其他方式要求我们代表你使用或披露信息时。'
            },
            sub2: {
              title: '3.2 通过必要的服务提供方',
              body: '我们可能依赖托管、邮件或内容基础设施服务提供方来运营网站并提供公开的目录和媒体资源。它们只会处理提供这些服务所必需的信息。'
            },
            sub3: {
              title: '3.3 出于法律要求',
              body: '当我们认为披露信息是为了遵守适用法律、法规、法院命令或政府合法请求时，我们可能会披露信息。'
            },
            sub4: {
              title: '3.4 为保护权利、利益或安全',
              body: '我们可能采取合理措施，以保护用户、公众、我们自己或第三方的权利、安全和财产。'
            }
          },
          section4: {
            title: '4. 数据存储与安全',
            point1: '昵称、头像、收藏、播放历史、听歌统计和偏好设置都会保存在设备上。',
            point2: '应用会跟随你在 iPhone 上设置的语言。',
            point3: '根据你的设备设置，部分本地应用数据可能会被包含在 Apple 管理的备份中。',
            point4: '我们会尽合理努力保护数据，但任何存储或传输方式都无法做到绝对安全。'
          },
          section5: {
            title: '5. 你的权利',
            sub1: {
              title: '5.1 查看和访问',
              body: '你可以查看应用内可见的个人资料信息和偏好设置。'
            },
            sub2: {
              title: '5.2 更正和更新',
              body: '你可以在应用内修改昵称、头像和其他可用设置。'
            },
            sub3: {
              title: '5.3 删除',
              body: '你可以删除本地历史或直接删除应用来移除设备上的本地数据。'
            },
            sub4: {
              title: '5.4 重置',
              body: '如果你在 iPhone 设置中更改语言，应用也会随之切换。'
            },
            sub5: {
              title: '5.5 问题和投诉',
              body: '如果你对隐私做法有疑问、意见或请求，可以通过下方联系方式联系我们。'
            }
          },
          section6: {
            title: '6. 本隐私政策的更新',
            body: '随着应用、网站或法律变化，我们可能会不时更新本隐私政策。若新增了实质性的数据处理方式，我们会在更新版本中说明。'
          },
          section7: {
            title: '7. 联系我们',
            body: '如果你对本隐私政策或本应用的数据处理方式有任何问题、意见或请求，请通过以下邮箱联系：'
          },
          contact: {
            eyebrow: '联系',
            title: '隐私问题请直接写信。',
            body: '如果你需要帮助理解这份政策或数据处理方式，请直接联系我们。',
            emailLabel: '联系邮箱',
            note: '这是处理隐私和支持问题的统一入口。'
          }
        }
      }
    }
  };

  const defaultTextCache = new WeakMap();
  let defaultMeta = {
    title: document.title,
    description: document.querySelector('meta[name="description"]')?.getAttribute('content') || ''
  };
  let currentLanguage = 'en';
  const homeDemoCopy = {
    en: {
      label: 'Demo player',
      ready: 'Tap a track to play.',
      idle: 'Ready',
      playing: 'Playing',
      paused: 'Paused',
      ended: 'Finished'
    },
    zh: {
      label: '试听播放器',
      ready: '点按任意曲目即可播放。',
      idle: '待播放',
      playing: '正在播放',
      paused: '已暂停',
      ended: '已完成'
    }
  };
  const homeDemoState = {
    audio: null,
    label: null,
    track: null,
    state: null,
    buttons: [],
    currentButton: null,
    currentStatus: 'idle'
  };

  const scrollState = {
    raf: 0
  };

  function readStoredLanguage() {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === 'en' || stored === 'zh') {
        return stored;
      }
    } catch {
      // Ignore storage failures and fall back to the device language.
    }

    const language = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
    return language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
  }

  function setStoredLanguage(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore storage failures.
    }
  }

  function getPath(root, key) {
    return key.split('.').reduce((value, part) => (value && part in value ? value[part] : undefined), root);
  }

  function captureDefaults() {
    document.querySelectorAll('[data-i18n-key]').forEach((element) => {
      if (!defaultTextCache.has(element)) {
        defaultTextCache.set(element, element.textContent ?? '');
      }
    });
  }

  function updateMeta(lang) {
    if (lang === 'zh') {
      const meta = zh.pages[page]?.meta;
      if (meta) {
        document.title = meta.title;
        const description = document.querySelector('meta[name="description"]');
        if (description) {
          description.setAttribute('content', meta.description);
        }
      }
      return;
    }

    document.title = defaultMeta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute('content', defaultMeta.description);
    }
  }

  function updateCommonText(lang) {
    const root = lang === 'zh' ? zh : null;
    document.querySelectorAll('[data-i18n-key]').forEach((element) => {
      const key = element.dataset.i18nKey;
      if (!key) {
        return;
      }

      if (lang === 'zh') {
        const value = getPath(root, key);
        if (typeof value === 'string') {
          element.textContent = value;
        }
      } else {
        const defaultText = defaultTextCache.get(element);
        if (typeof defaultText === 'string') {
          element.textContent = defaultText;
        }
      }
    });
  }

  function getHomeDemoLocale() {
    return homeDemoCopy[currentLanguage] || homeDemoCopy.en;
  }

  function setHomeDemoTrackProgress(button, progress) {
    const bar = button?.querySelector('.demo-track__progress span');
    if (bar) {
      bar.style.width = `${Math.max(0, Math.min(progress, 100)).toFixed(2)}%`;
    }
  }

  function setHomeDemoButtonState(button, pressed) {
    if (button) {
      button.setAttribute('aria-pressed', String(pressed));
    }
  }

  function syncHomeDemoStatus() {
    if (!homeDemoState.label || !homeDemoState.track || !homeDemoState.state) {
      return;
    }

    const locale = getHomeDemoLocale();
    homeDemoState.label.textContent = locale.label;

    if (!homeDemoState.currentButton) {
      homeDemoState.track.textContent = locale.ready;
      homeDemoState.state.textContent = locale.idle || locale.ready;
      return;
    }

    const title = homeDemoState.currentButton.querySelector('.demo-track__title')?.textContent?.trim() || locale.ready;
    homeDemoState.track.textContent = title;

    if (homeDemoState.currentStatus === 'playing') {
      homeDemoState.state.textContent = locale.playing;
      homeDemoState.currentButton.classList.add('is-playing');
    } else {
      if (homeDemoState.currentStatus === 'paused') {
        homeDemoState.state.textContent = locale.paused;
      } else if (homeDemoState.currentStatus === 'ended') {
        homeDemoState.state.textContent = locale.ended;
      } else {
        homeDemoState.state.textContent = locale.idle || locale.ready;
      }
      homeDemoState.currentButton.classList.remove('is-playing');
    }
  }

  function updateHomeDemoProgress() {
    if (!homeDemoState.audio || !homeDemoState.currentButton) {
      return;
    }

    const duration = homeDemoState.audio.duration;
    const progress = duration > 0 ? (homeDemoState.audio.currentTime / duration) * 100 : 0;
    setHomeDemoTrackProgress(homeDemoState.currentButton, progress);
  }

  function resetHomeDemoTrack(button) {
    if (!button) {
      return;
    }

    setHomeDemoButtonState(button, false);
    button.classList.remove('is-playing');
    setHomeDemoTrackProgress(button, 0);
  }

  function wireHomeDemoPlayer() {
    const player = document.querySelector('[data-demo-player]');
    if (!player) {
      return;
    }

    homeDemoState.audio = player.querySelector('[data-demo-audio]');
    homeDemoState.label = player.querySelector('[data-demo-status-label]');
    homeDemoState.track = player.querySelector('[data-demo-status-track]');
    homeDemoState.state = player.querySelector('[data-demo-status-state]');
    homeDemoState.buttons = Array.from(player.querySelectorAll('[data-demo-track]'));

    if (!homeDemoState.audio || !homeDemoState.buttons.length) {
      return;
    }

    syncHomeDemoStatus();

    homeDemoState.audio.addEventListener('play', () => {
      homeDemoState.currentStatus = 'playing';
      syncHomeDemoStatus();
      updateHomeDemoProgress();
    });

    homeDemoState.audio.addEventListener('pause', () => {
      if (!homeDemoState.currentButton) {
        homeDemoState.currentStatus = 'idle';
      } else if (homeDemoState.audio.ended) {
        homeDemoState.currentStatus = 'ended';
      } else {
        homeDemoState.currentStatus = 'paused';
      }
      syncHomeDemoStatus();
    });

    homeDemoState.audio.addEventListener('timeupdate', updateHomeDemoProgress);
    homeDemoState.audio.addEventListener('loadedmetadata', updateHomeDemoProgress);
    homeDemoState.audio.addEventListener('ended', () => {
      homeDemoState.currentStatus = 'ended';
      setHomeDemoTrackProgress(homeDemoState.currentButton, 100);
      syncHomeDemoStatus();
    });

    homeDemoState.buttons.forEach((button) => {
      button.addEventListener('click', async () => {
        const src = button.dataset.demoSrc;
        if (!src) {
          return;
        }

        const isCurrentButton = homeDemoState.currentButton === button;

        if (isCurrentButton && !homeDemoState.audio.paused && !homeDemoState.audio.ended) {
          homeDemoState.audio.pause();
          return;
        }

        if (!isCurrentButton && homeDemoState.currentButton) {
          resetHomeDemoTrack(homeDemoState.currentButton);
        }

        homeDemoState.currentButton = button;
        setHomeDemoButtonState(button, true);

        const absoluteSrc = new URL(src, document.baseURI).href;
        if (!isCurrentButton || homeDemoState.audio.currentSrc !== absoluteSrc) {
          homeDemoState.audio.src = src;
          homeDemoState.audio.load();
        }

        if (homeDemoState.audio.ended || !isCurrentButton) {
          homeDemoState.audio.currentTime = 0;
        }

        homeDemoState.currentStatus = 'playing';
        syncHomeDemoStatus();

        try {
          await homeDemoState.audio.play();
        } catch {
          homeDemoState.currentStatus = 'paused';
          syncHomeDemoStatus();
        }
      });
    });
  }

  function wireHomeVideoMotion() {
    if (prefersReducedMotion.matches) {
      document.querySelectorAll('[data-home-video]').forEach((video) => {
        video.pause();
      });
    }
  }

  function updateLanguageControls(lang) {
    document.querySelectorAll('[data-lang-option]').forEach((button) => {
      const isSelected = button.getAttribute('data-lang-option') === lang;
      button.setAttribute('aria-pressed', String(isSelected));
    });
  }

  function updateDocumentLanguage(lang) {
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-Hans' : 'en');
  }

  function applyLanguage(lang) {
    currentLanguage = lang === 'zh' ? 'zh' : 'en';
    updateDocumentLanguage(lang);
    updateCommonText(lang);
    updateMeta(lang);
    updateLanguageControls(lang);
    syncHomeDemoStatus();
  }

  function observeRevealElements() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) {
      return;
    }

    if (prefersReducedMotion.matches) {
      reveals.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    if (!('IntersectionObserver' in window)) {
      reveals.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observerInstance.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.12
      }
    );

    reveals.forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${Math.min(index * 80, 280)}ms`);
      observer.observe(element);
    });
  }

  function updateScrollState() {
    const depth = Math.min(window.scrollY / Math.max(window.innerHeight * 0.85, 1), 1);
    document.documentElement.style.setProperty('--scroll-depth', depth.toFixed(3));
    body.dataset.scrolled = window.scrollY > 8 ? 'true' : 'false';
  }

  function scheduleScrollUpdate() {
    if (scrollState.raf) {
      return;
    }

    scrollState.raf = window.requestAnimationFrame(() => {
      scrollState.raf = 0;
      updateScrollState();
    });
  }

  function wireLanguageToggle() {
    document.querySelectorAll('[data-lang-option]').forEach((button) => {
      button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang-option');
        if (lang === 'en' || lang === 'zh') {
          setStoredLanguage(lang);
          applyLanguage(lang);
        }
      });
    });
  }

  function wireScrollEffects() {
    if (!prefersReducedMotion.matches) {
      updateScrollState();
      window.addEventListener('scroll', scheduleScrollUpdate, { passive: true });
      window.addEventListener('resize', scheduleScrollUpdate, { passive: true });
    } else {
      body.dataset.scrolled = window.scrollY > 8 ? 'true' : 'false';
    }
  }

  function wireFooterYear() {
    const year = new Date().getFullYear();
    document.querySelectorAll('[data-current-year]').forEach((element) => {
      element.textContent = String(year);
    });
  }

  function init() {
    captureDefaults();
    wireLanguageToggle();
    wireScrollEffects();
    wireFooterYear();
    observeRevealElements();
    if (page === 'index') {
      wireHomeVideoMotion();
    }
    applyLanguage(readStoredLanguage());
    if (page === 'index') {
      wireHomeDemoPlayer();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
