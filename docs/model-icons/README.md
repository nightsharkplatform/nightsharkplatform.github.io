# Model icons

Vendored from https://github.com/victorcodess/nexus-ui/tree/main/components/svgs
under the MIT license in NEXUS-LICENSE.txt.

- chatgpt.svg: ChatgptIcon
- claude.svg: ClaudeIcon2
- gemini.svg: GeminiIcon

Converted from JSX to standalone SVG for local Neutron/IE11 loading. OpenAI's
currentColor fill is fixed to the dark theme text color. React classes and inline
style objects are removed. No network requests are needed at runtime.

The selector in AIPage.html follows the default example at
https://nexus-ui.dev/docs/components/model-selector. Model names and per-request credits come from the NightShark model catalog.
Provider names are matched to these local icons in `ai-workspace.js`.

`brain.svg` is vendored from [Brain on SVG Repo](https://www.svgrepo.com/svg/404878/brain),
listed there under the CC0 license. Its original colors, vector paths, and viewBox
are retained, with dimensions set to 32px. It is used when a provider has no mapped
icon or its icon fails to load, in both the model dropdown and the selected model
control (including Log view).

## Additional provider icons

Vendored from [Lobe Icons](https://github.com/lobehub/lobe-icons) at revision
`a94750e3f5f8fc33757b839d85030e742284e43a`, under the MIT license in
`LOBE-ICONS-LICENSE.txt`. Upstream files are in
[packages/static-svg/icons](https://github.com/lobehub/lobe-icons/tree/a94750e3f5f8fc33757b839d85030e742284e43a/packages/static-svg/icons).

| Local asset | Upstream asset |
| --- | --- |
| deepseek.svg | deepseek-color.svg |
| meta.svg | meta-color.svg |
| nvidia.svg | nvidia-color.svg |
| xai.svg | xai.svg |
| zai.svg | zai.svg |
| kimi.svg | kimi-color.svg |
| qwen.svg | qwen-color.svg |

Sized to 24px with presentation-only inline styles removed. Monochrome
`currentColor` fills are fixed to `#f1f8ff` so external SVG images remain visible
on the dark theme. Provider colors and vector paths are retained.
The xAI mark represents the requested SpaceXAI / Grok provider.

Sample model references (checked September 18, 2026):

- [DeepSeek V4.1 Flash](https://api-docs.deepseek.com/quick_start/pricing/)
- [Meta Llama 4 Scout](https://ai.meta.com/llama/get-started/)
- [NVIDIA Nemotron 3 Nano](https://nvidianews.nvidia.com/news/nvidia-debuts-nemotron-3-family-of-open-models)
- [SpaceXAI Grok 4.6](https://docs.x.ai/developers/models)
- [Z.ai GLM-5](https://docs.z.ai/guides/llm/glm-5)
- [Kimi K2.5](https://forum.moonshot.ai/t/kimi-k2-5-api-is-now-available/218)
- [Thinking Machines Inkling](https://tinker-docs.thinkingmachines.ai/tinker/models/)
- [Qwen3.7-Plus](https://qwen.ai/apiplatform)
- [TypeSafe AI Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev)

The selector uses the catalog’s `modelName` as its value. Local icons do not
configure provider API credentials, routing, or inference. Both Windows entry points embed the SVGs
and their license alongside the existing model icons.

## Thinking Machines icon

`thinking-machines.svg` is a compact TM monogram adapted for the model selector,
not an official standalone logo. It uses the Chakra Petch Regular letterforms
from the text wordmark on [Thinking Machines Lab's website](https://thinkingmachines.ai/),
outlined as SVG paths on a light square for readability at small sizes.
The source font is [Chakra Petch](https://github.com/google/fonts/tree/main/ofl/chakrapetch)
(SIL Open Font License); the SVG is rendered lettering, with no embedded font or
runtime font dependency. This asset is separate from the Lobe Icons collection.

## TypeSafe AI icon

`typesafe.svg` adapts the geometric mark and brand colors published on
[TypeSafe AI's website](https://typesafe.ai/) into a compact circular icon for
the model selector. It is separate from the Lobe Icons collection.
