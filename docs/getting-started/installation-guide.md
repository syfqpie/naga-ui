# Installation guide

```bash
# using npm
npm i naga-ui

# using yarn
yarn add naga-ui
```

## Integration with Visual Studio Code

You can enable auto-completion and hover information support for HTML in VSCode. In `<project_root>/.vscode/settings.json`, add these:

```json
{
	...
	"html.customData": [
		"./node_modules/naga-ui/build/naga-ui.html-data.json"
	],
	...
}
```
