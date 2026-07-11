const o = Object.assign(
  (e, ...t) => window.enmity.modules.common.React.createElement(e, ...t),
  window.enmity.modules.common.React
);

function V(e) {
  window.enmity.plugins.registerPlugin(e);
}

function O(e) {
  return window.enmity.patcher.create(e);
}

const _ = window.enmity.modules.common.Constants;
const U = window.enmity.modules.common.React;
const v = window.enmity.modules.common.Dialog;
const G = window.enmity.modules.common.Users;
const R = window.enmity.modules.common.NavigationNative;
const E = window.enmity.modules.common.Linking;
const F = window.enmity.modules.common.StyleSheet;
const j = window.enmity.modules.common.Locale;
const k = window.enmity.modules.common.Profiles;
const x = window.enmity.modules.common.Flux;

const {
  components: t
} = window.enmity;

const h = t.Button;
const A = t.Image;
const W = t.KeyboardAvoidingView;
const Y = t.Pressable;
const z = t.ScrollView;
const d = t.View;
const K = t.FormDivider;
const J = t.FormRow;
const q = t.FormSection;
const Q = t.FormSwitch;

function f(e) {
  const n = window.enmity.assets.getIDByName(e);
  if (typeof n == "undefined") throw new Error(`Asset Id by the name of '${e}' is undefined`);
  return n;
}

const w = {
  id: "friends-since",
  manifest: {
    name: "FriendsSince",
    version: "1.0.0",
    description: "Shows how long you have been friends for",
    authors: [{ name: "doggybootsy", id: "515780151791976453" }]
  },
  invite: "yYJA3qQE5F",
  git: {
    url: "https://github.com/doggybootsy/enmity-plugins",
    branch: "main"
  },
  IS_PROD: !1
};

const r = Object.assign(w.manifest, { name: w.id });
const X = w.invite;
const S = w.git;

const { native: g } = window.enmity;

function N() {
  g.reload();
}

const {
  Children: Fe,
  Component: b,
  Fragment: Pe,
  Profiler: Ie,
  PureComponent: Te,
  StrictMode: Ce,
  Suspense: _e,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Re,
  cloneElement: Ee,
  createContext: ke,
  createElement: oe,
  createFactory: xe,
  createRef: De,
  forwardRef: Ae,
  isValidElement: te,
  lazy: Ne,
  memo: Le,
  startTransition: $e,
  useCallback: Be,
  useContext: Me,
  useDebugValue: Ve,
  useDeferredValue: Oe,
  useEffect: Ue,
  useId: Ge,
  useImperativeHandle: je,
  useInsertionEffect: He,
  useLayoutEffect: We,
  useMemo: Ye,
  useReducer: ze,
  useRef: Ke,
  useState: ne,
  useSyncExternalStore: Je,
  useTransition: qe,
  version: Qe
} = U;

const { Pile: ie, Text: c } = window.enmity.modules.getByProps("Pile", "Text");
const se = F.ThemeColorMap;

function re(e) {
  return F.createThemedStyleSheet(e);
}

function le(e) {
  G.getUser(e) ? k.showUserProfile({ userId: e }) : window.enmity.modules.common.AsyncUsers.fetchProfile(e).then(() => {
    k.showUserProfile({ userId: e });
  });
}

function L(e, n) {
  Object.defineProperty(e, "super_", { value: n, writable: !0, configurable: !0 });
  Object.setPrototypeOf(e.prototype, n.prototype);
}

const $ = (() => {
  function e(n, i) {
    b.call(this, n, i);
    this.state = { hasError: !1 };
  }
  e.prototype.componentDidCatch = function(n, i) {
    this.setState({ hasError: !0, error: n, info: i });
  };
  e.prototype.render = function() {
    return this.state.hasError ?
      typeof this.props.fallback == "function" ?
      o(this.props.fallback, { error: this.state.error, info: this.state.info, self: this }) :
      this.props.fallback :
      this.props.children;
  };
  e.defaultProps = {
    fallback: o(c, { style: { color: "red" } }, "React Error")
  };
  L(e, b);
  e.wrap = function(n) {
    function i(s, l) {
      b.call(this, s, l);
    }
    i.prototype.render = function() {
      return oe(n, this.props);
    };
    L(i, b);
    return i;
  };
  e.displayName = "DoggyBootsy(ErrorBoundary)";
  return e;
})();

function ae(e) {
  return x.Store.getAll().find(n => n.getName() === e);
}

const ce = x.useStateFromStores;
const me = window.enmity.modules.getByProps("acceptInviteAndTransitionToInviteChannel");

const de = r.name.split("-").map(e => e[0].toUpperCase() + e.slice(1)).join(" ");

const p = F.createThemedStyleSheet({
  name: { color: _.ThemeColorMap.HEADER_PRIMARY },
  version: { color: _.ThemeColorMap.HEADER_SECONDARY },
  scroller: { flexGrow: 1, flexShrink: 1 },
  info: { flexGrow: 0, flexShrink: 0 },
  view: { height: "100%", display: "flex", flexDirection: "column", gap: 0 }
});

const y = 32;

function ue() {
  return o(J, {
    style: p.info,
    label: o(o.Fragment, null,
      o(c, { variant: "heading-lg/semibold", style: p.name }, de),
      o(c, { variant: "text-md/normal", style: p.version }, "v", r.version)
    ),
    trailing: o(ie, { size: y, gap: y / 8, depthX: .5, depthY: null, shape: "circle" },
      r.authors.map(({ name: e, id: n }, i) =>
        o(Y, {
          onPress: () => {
            typeof n == "string" ? le(n) : E.openURL(`https://github.com/${e}`);
          },
          key: i
        },
          o(A, {
            src: `https://github.com/${e}.png`,
            style: { width: y, height: y, borderRadius: y }
          })
        )
      )
    )
  });
}

function we() {
  const e = R.useNavigation();
  return o(q, { title: "Updater" },
    o(J, {
      label: "Attempt to update",
      subLabel: "Confirm both prompts to update",
      leading: o(J.Icon, { source: f("ic_sync_24px") }),
      onPress: () => {
        (async function() {
          await window.enmity.plugins.uninstallPlugin(r.name);
          e.canGoBack() ? e.goBack() : e.pop();
          const [n, i] = S.url.split("/").slice(-2);
          const s = `https://raw.githubusercontent.com/${n}/${i}/refs/heads/${S.branch}/dist/${r.name}.js`;
          await window.enmity.plugins.installPlugin(
            `${s}?__random__${Math.random().toString(36).slice(2)}`,
            ({ data: l }) => {
              if (l === "installed_plugin") {
                v.show({
                  title: "Installed successfully",
                  body: "Successfully installed plugin"
                });
                setTimeout(() => {
                  e.push("EnmityCustomPage", {
                    pageName: r.name,
                    pagePanel: window.enmity.plugins.getPlugin(r.name).getSettingsPanel
                  });
                }, 10);
                return;
              }
              if (l === "overridden_plugin") {
                v.show({
                  title: "Installed successfully",
                  body: `Successfully replaced plugin\nWould you like to reload Discord?`,
                  confirmText: "Reload",
                  cancelText: "Later",
                  onConfirm: N
                });
                return;
              }
              v.show({
                title: "Installed Failed",
                body: "Was not able to update plugin"
              });
            }
          );
        })();
      }
    })
  );
}

function ge({ error: e, info: n, self: i }) {
  const s = R.useNavigation();
  const [l, m] = ne(!1);
  return o(d, {
    style: { borderWidth: 2, padding: 8, margin: 8, borderColor: "red", borderRadius: 8 }
  },
    o(c, { style: { color: "red" } }, "React Error"),
    o(d, null, o(c, null, e.message)),
    o(h, {
      title: "View Complete Error Info",
      onPress: () => m(M => !M)
    }),
    l && (e.stack || n.componentStack || n.digest) &&
    o(d, null,
      e.stack && o(c, null, e.stack),
      n.digest && o(c, null, n.digest),
      n.componentStack && o(c, null, n.componentStack)
    ),
    o(h, { title: "Attempt Recovery", onPress: () => i.setState({ hasError: !1 }) }),
    o(h, { title: "Exit Settings", onPress: () => { s.canGoBack() ? s.goBack() : s.pop(); } }),
    o(h, { title: "Reload", onPress: () => N() })
  );
}

function pe({ settings: e, children: n }) {
  const i = {
    GitHub: f("img_account_sync_github_white"),
    Discord: f("Discord")
  };
  return o(d, { style: p.view },
    o(ue, null),
    o(z, { style: p.scroller },
      o(W, {
        enabled: !0,
        behavior: "position",
        contentContainerStyle: { backfaceVisibility: "hidden" }
      },
        o(we, null),
        o(q, { title: "Links" },
          o(J, {
            label: "Support Server",
            leading: o(J.Icon, { source: i.Discord }),
            trailing: J.Arrow,
            onPress: () => {
              me.acceptInviteAndTransitionToInviteChannel({
                inviteKey: X,
                context: { location: "Invite Button Embed" },
                callback: () => {}
              });
            }
          }),
          o(K, null),
          o(J, {
            label: "Source",
            leading: o(J.Icon, { source: i.GitHub }),
            trailing: J.Arrow,
            onPress: () => {
              const [s, l] = S.url.split("/").slice(-2);
              E.openURL(`https://github.com/${s}/${l}/tree/${S.branch}/packages/${r.name}/`);
            }
          })
        ),
        o($, { fallback: ge }, n),
        o(d, { style: { height: 50 } })
      )
    )
  );
}

function ye(e) {
  return window.enmity.settings.makeStore(e);
}

const u = ye(r.name);
const I = O(r.name);
let B = !1;

function he(e) {
  var n;
  if (B) throw new Error("Plugin has already been implemented!");
  B = !0;
  typeof e == "function" && (e = e());
  
  const i = m => {
    typeof e[m] == "function" && e[m]();
  };
  
  (!r.color || r.color === "random") &&
    (r.color = `#${Math.floor(Math.random() * (16777215 + 1)).toString(16)}`);
  
  const s = {
    ...r,
    commands: e.commands,
    patches: e.patches,
    onStart: i.bind(null, "onStart"),
    onStop() {
      i("onStop");
      I.unpatchAll();
    },
    getSettingsPanel: void 0
  };
  
  const l = (n = e.SettingsPanel) != null ? n : e.SettingsPanel = () => null;
  s.getSettingsPanel = () => o(pe, { settings: u }, o(l, { settings: u }));
  
  V(s);
  s.$$_doggy_$$ = { manifest: r, settings: u, patcher: I };
  i("onLoad");
}

const T = ae("RelationshipStore");

function fe(e, n) {
  if (e == null || e === "") return null;
  const i = new Date(e);
  return !(i instanceof Date) || isNaN(i.getTime()) ?
    null :
    i.toLocaleDateString(n, { month: "short", day: "numeric", year: "numeric" });
}

const C = re({
  header: { marginBottom: 8 },
  text: { flexDirection: "row", flexWrap: "wrap", columnGap: 6 },
  icon: { height: 16, width: 16, tintColor: se.INTERACTIVE_NORMAL }
});

// FIX: Target the correct profile component
const be = f("ic_friend_wave_24px");

// This component will be injected into the profile
const ve = $.wrap(function({ userId: e }) {
  const n = ce([T], () => {
    const i = T.getSince(e);
    return i && T.isFriend(e) ? fe(i, j.getLocale()) : null;
  });
  
  if (n) {
    return o(d, {
      style: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexDirection: "row",
        alignItems: "center",
        gap: 6
      }
    },
      u.getBoolean("add-icon", !0) &&
      o(A, { 
        source: be, 
        style: { 
          height: 16, 
          width: 16, 
          tintColor: se.INTERACTIVE_NORMAL 
        } 
      }),
      o(c, {
        color: "header-secondary",
        variant: "text-sm/normal"
      }, `Friends since ${n}`)
    );
  }
  return null;
});

// FIXED onStart - patches the UserProfileHeader component
he({
  onStart() {
    // Try to get the UserProfileHeader component
    let ProfileComponent = window.enmity.modules.getByName("UserProfileHeader", { default: false });
    
    // If not found, try UserProfile
    if (!ProfileComponent) {
      ProfileComponent = window.enmity.modules.getByName("UserProfile", { default: false });
    }
    
    // If still not found, try to find it by props
    if (!ProfileComponent) {
      const modules = window.enmity.modules.getAll();
      for (const mod of modules) {
        if (mod && mod.default && typeof mod.default === 'function') {
          const name = mod.default.name || mod.default.displayName;
          if (name && (name.includes("UserProfile") || name.includes("Profile"))) {
            ProfileComponent = mod;
            break;
          }
        }
      }
    }
    
    if (ProfileComponent) {
      // Patch the component
      I.after(ProfileComponent, "default", (e, props, i) => {
        const { userId } = props[0] || {};
        if (!userId) return;
        
        // Check if we're friends with this user
        if (!T.isFriend(userId)) return;
        
        const children = i.props.children;
        
        // Handle different children structures
        if (Array.isArray(children)) {
          // Check if our component is already added
          const alreadyAdded = children.some(child => 
            te(child) && child.type && child.type.name === "FriendsSince"
          );
          if (!alreadyAdded) {
            // Insert after the header (position 1)
            children.splice(1, 0, o(ve, { userId, key: "friends-since" }));
          }
        } else if (children) {
          // Wrap single child
          i.props.children = [
            children,
            o(ve, { userId, key: "friends-since" })
          ];
        }
      });
    } else {
      // Fallback: Try patching the ProfileStore render
      const ProfileRenderer = window.enmity.modules.getByName("ProfileRenderer", { default: false });
      if (ProfileRenderer) {
        I.after(ProfileRenderer, "default", (e, props, i) => {
          const { userId } = props[0] || {};
          if (!userId || !T.isFriend(userId)) return;
          
          // Add our component to the render
          const children = i.props.children;
          if (Array.isArray(children)) {
            children.push(o(ve, { userId, key: "friends-since" }));
          }
        });
      }
    }
  },
  
  SettingsPanel() {
    return o(q, { title: "Settings" },
      o(J, {
        label: "Add Icon",
        trailing: o(Q, {
          value: u.getBoolean("add-icon", !0),
          onValueChange: e => u.set("add-icon", e)
        })
      })
    );
  }
});
