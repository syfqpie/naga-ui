# Button

Button is a custom button web component that encapsulates button functionality with our default design look.

## Import

```ts
import { NagaButton } from 'naga-ui'
```

<script setup>
import { onMounted } from 'vue'
onMounted(async() => {
	await import('../../build/bundle.js')
})
</script>

## Basic usage

<naga-button>
	Hello world
</naga-button>

```html
<naga-button>
	Hello world
</naga-button>
```


## Disabled state

We can toggle disabled state by passing `boolean` value to `disabled` attribute

<naga-button disabled>
	Hello world
</naga-button>

```html
<!-- Enabled -->
<naga-button>
	Hello world
</naga-button>

<naga-button :disabled="false">
	Hello world
</naga-button>

<!-- Disabled -->
<naga-button disabled>
	Hello world
</naga-button>

<naga-button :disabled="true">
	Hello world
</naga-button>
```

## Sizes

There are 4 variants of button sizes avaiable: `xs` | `sm` | `md` | `lg`

### Extra small `xs`

<div class="component-display-block mtop">
	<naga-button size="xs">
		Hello world
	</naga-button>
	<naga-button size="xs" disabled>
		Hello world
	</naga-button>
</div>

```html
<naga-button size="xs">
	Hello world
</naga-button>
```

### Small `sm`

<div class="component-display-block mtop">
	<naga-button size="sm">
		Hello world
	</naga-button>
	<naga-button size="sm" disabled>
		Hello world
	</naga-button>
</div>

```html
<naga-button size="sm">
	Hello world
</naga-button>
```

### Medium `md`

<div class="component-display-block mtop">
	<naga-button size="md">
		Hello world
	</naga-button>
	<naga-button size="md" disabled>
		Hello world
	</naga-button>
</div>

```html
<naga-button size="md">
	Hello world
</naga-button>

<naga-button>
	Hello world
</naga-button>
```

### Large `lg`

<div class="component-display-block mtop">
	<naga-button size="lg">
		Hello world
	</naga-button>
	<naga-button size="lg" disabled>
		Hello world
	</naga-button>
</div>

```html
<naga-button size="lg">
	Hello world
</naga-button>
```

## Pill button

By default, button is set to have the `pill` look. Can toggle this by passing `boolean` value to `isPill` attribute

<div class="component-display-block mtop">
	<naga-button .isPill="false">
		Hello world
	</naga-button>
	<naga-button .isPill="true">
		Hello world
	</naga-button>
</div>

```html
<naga-button :isPill="false">
	Hello world
</naga-button>
```

## Error state

Toggle error state by passing `boolean` value to `isError` attribute. Default to `false`

<div class="component-display-block mtop">
	<naga-button .isPill="false" .isError="true">
		Hello world
	</naga-button>
</div>

```html
<naga-button :isError="true">
	Hello world
</naga-button>
```

## Success state

Toggle success state by passing `boolean` value to `isSuccess` attribute. Default to `false`

<div class="component-display-block mtop">
	<naga-button .isPill="false" .isSuccess="true">
		Hello world
	</naga-button>
</div>

```html
<naga-button :isSuccess="true">
	Hello world
</naga-button>
```

## Full width

We can toggle full width style by passing `boolean` value to `isFull` attribute

<div class="component-display-block mtop display-col display-full">
	<naga-button isFull>
		Hello world
	</naga-button>
	<naga-button isFull disabled>
		Hello world
	</naga-button>
</div>

```html
<!-- Enabled -->
<naga-button isFull>
	Hello world
</naga-button>

<naga-button :isFull="true">
	Hello world
</naga-button>

<!-- Disabled -->
<naga-button>
	Hello world
</naga-button>

<naga-button :isFull="false">
	Hello world
</naga-button>
```

### onClick event

We have a callback props for click event

```html
<naga-button @onClick="doClickEvent()">
	Hello world
</naga-button>
```

### Changing the styles

We can change the button styling by overriding these css variables

```css
:root {
	--naga-btn-color-custom: #FFFFFF;
	--naga-btn-bg-custom: #0F172A;
	--naga-btn-bg-hovered-custom: #020617CC;
	--naga-btn-bg-focused-custom: #020617;
	--naga-btn-box-shadow-custom: rgb(255, 255, 255) 0px 0px 0px 0px, rgba(15, 23, 42, 0.2) 0px 0px 0px 3px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;

	--naga-btn-bg-success-custom: #22C55E;
	--naga-btn-bg-hovered-success-custom: #16A34AB3;
	--naga-btn-bg-focused-success-custom: #16A34AE6;
	--naga-btn-color-success-custom: #FFF;
	--naga-btn-box-shadow-success-custom: rgb(255, 255, 255) 0px 0px 0px 0px, rgba(22, 163, 74, 0.2) 0px 0px 0px 3px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;

	--naga-btn-bg-error-custom: #EF4444;
	--naga-btn-bg-hovered-error-custom: #DC2626B3;
	--naga-btn-bg-focused-error-custom: #DC2626E6;
	--naga-btn-color-error-custom: #FFF;
	--naga-btn-box-shadow-error-custom: rgb(255, 255, 255) 0px 0px 0px 0px, rgba(220, 38, 38, 0.2) 0px 0px 0px 3px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}
```
